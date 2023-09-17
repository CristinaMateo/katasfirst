function digitize(n) {
    let o = n.toString();
    let p = o.split('');
    let q = p.reverse();
    let r = q.map((value) => Number(value));
    return r;
  }