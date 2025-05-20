import React, { useEffect } from 'react';

export const TwoGisWidget: React.FC = () => {
  useEffect(() => {
    // Создаем script элемент для инициализации виджета
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      ((r,u)=>{
        const l=document.getElementById(r);
        l.contentWindow.document.open(),
        l.contentWindow.document.write(decodeURIComponent(escape(atob(u)))),
        l.contentWindow.document.close()
      })("big_light_70000001074991964", "PGhlYWQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgd2luZG93Ll9fc2l6ZV9fPSdiaWcnOwogICAgd2luZG93Ll9fdGhlbWVfXz0nbGlnaHQnOwogICAgd2luZG93Ll9fYnJhbmNoSWRfXz0nJwogICAgd2luZG93Ll9fb3JnSWRfXz0nNzAwMDAwMDEwNzQ5OTE5NjQnCiAgIDwvc2NyaXB0PjxzY3JpcHQgY3Jvc3NvcmlnaW49ImFub255bW91cyIgdHlwZT0ibW9kdWxlIiBzcmM9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2lmcmFtZS5qcyI+PC9zY3JpcHQ+PGxpbmsgcmVsPSJtb2R1bGVwcmVsb2FkIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Rpc2suMmdpcy5jb20vd2lkZ2V0LWNvbnN0cnVjdG9yL2Fzc2V0cy9kZWZhdWx0cy5qcyI+PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Rpc2suMmdpcy5jb20vd2lkZ2V0LWNvbnN0cnVjdG9yL2Fzc2V0cy9kZWZhdWx0cy5jc3MiPjwvaGVhZD48Ym9keT48ZGl2IGlkPSJpZnJhbWUiPjwvZGl2PjwvYm9keT4=")
    `;
    document.body.appendChild(script);

    return () => {
      // Удаляем script при размонтировании компонента
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe 
      id="big_light_70000001074991964"
      frameBorder="0"
      width="528px"
      height="824px"
      sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    />
  );
};