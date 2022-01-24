let debounceTimeout: NodeJS.Timeout;

const debounce = (fn: (...params: any[]) => void, timeout: number) => {
  return (useTimeout: boolean, ...params: any[]) => {
    clearTimeout(debounceTimeout);
    if (useTimeout) {
      debounceTimeout = setTimeout(() => fn(...params), timeout);
    } else {
      fn(...params);
    }
  }
}

export default debounce
