window.BENCHMARK_DATA = {
  "lastUpdate": 1702821140174,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9191997b8ad9ba2908b17b5e53132722c0540cdd",
          "message": "Added account state queries",
          "timestamp": "2023-12-17T22:33:47+09:00",
          "tree_id": "ddd3bedabc865246b56b66d0c27114b6723994e3",
          "url": "https://github.com/greymistcube/libplanet/commit/9191997b8ad9ba2908b17b5e53132722c0540cdd"
        },
        "date": 1702821132693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739313.540690104,
            "unit": "ns",
            "range": "± 5314.514363596877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197608.55390625,
            "unit": "ns",
            "range": "± 21676.611272440867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769871.437124399,
            "unit": "ns",
            "range": "± 8030.187091483762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2001931.2663574219,
            "unit": "ns",
            "range": "± 6139.021316859043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611450.8021647135,
            "unit": "ns",
            "range": "± 1294.5373185600688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573377.8592936198,
            "unit": "ns",
            "range": "± 1940.234777922406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383302.6363636362,
            "unit": "ns",
            "range": "± 61204.25885192661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547300.8666666667,
            "unit": "ns",
            "range": "± 45264.53963229726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3130819.0384615385,
            "unit": "ns",
            "range": "± 83284.91015086984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2869612.159090909,
            "unit": "ns",
            "range": "± 97784.44882708069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776473.642857143,
            "unit": "ns",
            "range": "± 193105.67653762255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40234.76804123711,
            "unit": "ns",
            "range": "± 4916.186933902347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199479,
            "unit": "ns",
            "range": "± 5771.425672580186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191436.33333333334,
            "unit": "ns",
            "range": "± 7832.514496930903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166091.7619047619,
            "unit": "ns",
            "range": "± 3794.1874875230124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060864,
            "unit": "ns",
            "range": "± 57895.865045211416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2778370.230769231,
            "unit": "ns",
            "range": "± 34302.00330435976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15992.939393939394,
            "unit": "ns",
            "range": "± 2681.1760320159456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67055.39024390244,
            "unit": "ns",
            "range": "± 3563.347478598878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52739,
            "unit": "ns",
            "range": "± 1438.3528148545474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62400.22680412371,
            "unit": "ns",
            "range": "± 13621.22197888369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3374.705263157895,
            "unit": "ns",
            "range": "± 641.1523182401904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13811.515151515152,
            "unit": "ns",
            "range": "± 2613.504951185311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5604682.8,
            "unit": "ns",
            "range": "± 23646.630769368752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14279283.357142856,
            "unit": "ns",
            "range": "± 101183.8443701191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36276755.416666664,
            "unit": "ns",
            "range": "± 193067.20905305975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73606189.21428572,
            "unit": "ns",
            "range": "± 644095.7394463578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150523126.46666667,
            "unit": "ns",
            "range": "± 1114990.7456045074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947568.5384615385,
            "unit": "ns",
            "range": "± 74351.18934389202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875538.6712328766,
            "unit": "ns",
            "range": "± 92438.02932746871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1397669.3,
            "unit": "ns",
            "range": "± 92352.56732997898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6125587.957894737,
            "unit": "ns",
            "range": "± 376387.1857377073"
          }
        ]
      }
    ]
  }
}