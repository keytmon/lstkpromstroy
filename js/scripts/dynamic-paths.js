export const getDynamicPaths = () => {

    const isRoot = !window.location.pathname.includes('/html/');

    return {
        pagePrefix: isRoot ? './html/' : './',
        imgPrefix: isRoot ? './img/' : '../img/',
        homePath: isRoot ? './index.html' : '../index.html'
    };
};