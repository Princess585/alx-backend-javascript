export default function loadBalancer(chinaDownload, USDownload) {
  const data = Promise.race([chinaDownload, USDownload]).then((value) => value);
  return data;
}
