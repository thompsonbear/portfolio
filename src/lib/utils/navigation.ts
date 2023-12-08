export function scrollIntoView(e: MouseEvent) {
    const el = document.querySelector((e.target as HTMLButtonElement)?.getAttribute('href') ?? '');
    if (!el) return;
    el.scrollIntoView({
        behavior: 'smooth'
    });
}