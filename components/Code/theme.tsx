// none of the default themes worked too well for accessibility
// so we altered a theme from:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/tree/master/src/styles/hljs
const theme = {
  hljs: {
    display: 'block',

    padding: 'var(--gap)',
    background: 'var(--color-block-background)',
    color: 'var(--color-foreground)',
  },
  'hljs-subst': {
    color: '#434f54',
  },
  'hljs-keyword': {
    color: 'var(--color-highlight)',
  },
  'hljs-attribute': {
    color: 'var(--color-highlight)',
  },
  'hljs-selector-tag': {
    color: 'var(--color-highlight)',
  },
  'hljs-doctag': {
    color: 'var(--color-highlight)',
  },
  'hljs-name': {
    color: 'var(--color-highlight)',
  },
  'hljs-tag': {
    color: 'var(--color-highlight)',
  },
  'hljs-built_in': {
    color: '#D35400',
  },
  'hljs-literal': {
    color: '#D35400',
  },
  'hljs-bullet': {
    color: '#D35400',
  },
  'hljs-code': {
    color: '#D35400',
  },
  'hljs-addition': {
    color: '#D35400',
  },
  'hljs-regexp': {
    color: '#00979D',
  },
  'hljs-symbol': {
    color: '#00979D',
  },
  'hljs-variable': {
    color: '#00979D',
  },
  'hljs-template-variable': {
    color: '#00979D',
  },
  'hljs-link': {
    color: '#00979D',
  },
  'hljs-selector-attr': {
    color: '#00979D',
  },
  'hljs-selector-pseudo': {
    color: '#00979D',
  },
  'hljs-type': {
    color: '#005C5F',
  },
  'hljs-string': {
    color: '#005C5F',
  },
  'hljs-selector-id': {
    color: '#005C5F',
  },
  'hljs-selector-class': {
    color: '#005C5F',
  },
  'hljs-quote': {
    color: '#005C5F',
  },
  'hljs-template-tag': {
    color: '#005C5F',
  },
  'hljs-deletion': {
    color: '#005C5F',
  },
  'hljs-title': {
    color: '#880000',
    fontWeight: 'bold',
  },
  'hljs-section': {
    color: '#880000',
    fontWeight: 'bold',
  },
  'hljs-comment': {
    color: 'rgba(149,165,166,.8)',
  },
  'hljs-meta-keyword': {
    color: '#728E00',
  },
  'hljs-meta': {
    color: '#434f54',
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-strong': {
    fontWeight: 'bold',
  },
  'hljs-function': {
    color: '#728E00',
  },
  'hljs-number': {
    color: '#EB0000',
  },
}

export { theme }
