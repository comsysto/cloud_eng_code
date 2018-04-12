console.log((process.env.INPUT || '').split('').reduce((a, s) => a + (c => String.fromCharCode(c - 46 && c - 47 ? c - 1 : c))(s.charCodeAt(0)), ''))
