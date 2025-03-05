function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function xrcounting() {
  const date1 = new Date('5/1/2025');
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))-1;
  const duration = 1
  const interval = (duration / diffDays) * 1000
  for (let i = 0; i <= diffDays; i++) {
    document.getElementById("xrcount").innerHTML = "<strong>" + String(i) + "</strong> days";
    await sleep(interval);

  }
  xrextra(diffDays)

}


async function xrextra(ddiff) {
  document.getElementById("xr_c").style.animation = 'fadein 2s forwards';
  await sleep(1000)
  const weeks = Math.floor(ddiff / 7)
  const days = ddiff % 7
  const months = Math.round(ddiff / 30)
  document.getElementById("xr-weeks").innerHTML = weeks + " weeks, " + days + " days";

  document.getElementById("xr-months").innerHTML = "or about " + months + " months";
  document.getElementById("xr-weeks").style.animation = 'fadein 2s forwards';
  document.getElementById("xr-months").style.animation = 'fadein 2s forwards';
}



async function swrcounting() {
  const date1 = new Date('5/25/2025');
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const duration = 1
  const interval = (duration / diffDays) * 1000
  for (let j = 0; j <= diffDays; j++) {
    document.getElementById("swrcount").innerHTML = "<strong>" + String(j) + "</strong> days";
    await sleep(interval);

  }
  swrextra(diffDays)


}

async function swrextra(ddiff) {
  document.getElementById("swr_c").style.animation = 'fadein 2s forwards';
  await sleep(1000)
  const weeks = Math.floor(ddiff / 7)
  const days = ddiff % 7
  const months = Math.round(ddiff / 30)
  document.getElementById("swr-weeks").innerHTML = weeks + " weeks, " + days + " days";

  document.getElementById("swr-months").innerHTML = "or about " + months + " months";
  document.getElementById("swr-weeks").style.animation = 'fadein 2s forwards';
  document.getElementById("swr-months").style.animation = 'fadein 2s forwards';
}

xrcounting()
swrcounting()


