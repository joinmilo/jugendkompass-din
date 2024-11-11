export const isIOs = (): boolean => {
  console.log('hello 1');
  const test =  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)

  console.log('hello', test);
  console.log('hello', navigator.userAgent)

  return test;
}
