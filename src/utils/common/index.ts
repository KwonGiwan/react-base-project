export const fileDownloadWithUrlHandler = (url: string) => {
  const anchorElement = document.createElement('a');
  document.body.appendChild(anchorElement);
  anchorElement.download = 'SNAPTAG TEST SDK';
  anchorElement.href = url;
  anchorElement.click();
  document.body.removeChild(anchorElement);
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini/i.test(
    navigator.userAgent,
  );
};
