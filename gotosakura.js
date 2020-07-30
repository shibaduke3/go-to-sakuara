'use strict';

// target の要素が出力されるまで待つ。
window.addEventListener('load', (event) => {
  let target = document.getElementById('acrCustomerReviewLink');
  // 商品詳細ページでない、またはレビューがついていないページは対象外とする。
  if (target == null) {
    return
  };

  let parent = target.closest('#averageCustomerReviews');
  // 拡張機能側で用意している画像のパスを取得する。
  let imageUrl = chrome.extension.getURL('images/gotosakura_button.png');
  // 親要素の中にボタンを追加する。
  parent.insertAdjacentHTML("beforeend", `<input type="image" src="${imageUrl}" id="jumps" style="width: 80px; height: 24px; margin-left: 3px;">`);

  document.getElementById("jumps").onclick = function() {
    // 現在のページの URL を取得する。
    let url = location.href;
    // 現在のページの URL の ASIN を正規表現で取得する。
    let match = url.match(/(dp|gp\/product)\/(.{10})/);
    // ASIN をリンクに組み込み、別タブで開く。
    window.open('https://sakura-checker.jp/search/' + match[2] + '/');
  };
});
