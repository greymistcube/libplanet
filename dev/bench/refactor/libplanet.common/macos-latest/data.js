window.BENCHMARK_DATA = {
  "lastUpdate": 1689255276580,
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
          "id": "ba9389cb4ed6646f6d800bba871490927b0b4eae",
          "message": "Proofreading",
          "timestamp": "2023-07-13T22:14:15+09:00",
          "tree_id": "69062a506833fe2795b227937298e6db95638349",
          "url": "https://github.com/greymistcube/libplanet/commit/ba9389cb4ed6646f6d800bba871490927b0b4eae"
        },
        "date": 1689255260609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8043475.069767442,
            "unit": "ns",
            "range": "± 437119.34640996787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19624432.34375,
            "unit": "ns",
            "range": "± 600385.5157720831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49528864.64285714,
            "unit": "ns",
            "range": "± 1792795.0907671032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94801398.9375,
            "unit": "ns",
            "range": "± 1830501.9563080857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195759092.625,
            "unit": "ns",
            "range": "± 3844762.2872174187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55143.073033707864,
            "unit": "ns",
            "range": "± 5188.496749557972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309287.64666666667,
            "unit": "ns",
            "range": "± 15549.234912692333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298288.91549295775,
            "unit": "ns",
            "range": "± 14317.114238108259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277795.93956043955,
            "unit": "ns",
            "range": "± 20444.299839215597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099132.023809524,
            "unit": "ns",
            "range": "± 95613.95281475347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3694462.85,
            "unit": "ns",
            "range": "± 83785.00506231473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17395.96629213483,
            "unit": "ns",
            "range": "± 1859.8348255682063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85428.84042553192,
            "unit": "ns",
            "range": "± 7764.227744180968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81624.70786516854,
            "unit": "ns",
            "range": "± 6957.271116677872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99920.29347826086,
            "unit": "ns",
            "range": "± 12298.56832777393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5366.723404255319,
            "unit": "ns",
            "range": "± 605.8752383061941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16798.82222222222,
            "unit": "ns",
            "range": "± 1743.070065877102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576498.8578947368,
            "unit": "ns",
            "range": "± 152243.4020694462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2924325.8636363638,
            "unit": "ns",
            "range": "± 171675.3155867793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087764.5625,
            "unit": "ns",
            "range": "± 177394.45705781833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910608.09375,
            "unit": "ns",
            "range": "± 269160.83276430104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157290.0319148935,
            "unit": "ns",
            "range": "± 182340.00009014842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3362956.1789473686,
            "unit": "ns",
            "range": "± 325551.81837762526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286520.25,
            "unit": "ns",
            "range": "± 170229.05915748392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868671.084210526,
            "unit": "ns",
            "range": "± 302890.26993811526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7305292.646341464,
            "unit": "ns",
            "range": "± 386831.05619902397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6370752.991071428,
            "unit": "ns",
            "range": "± 63850.913837276355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873322.045703125,
            "unit": "ns",
            "range": "± 17472.99342257426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256434.6490885417,
            "unit": "ns",
            "range": "± 14461.83387494047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2458552.1591145834,
            "unit": "ns",
            "range": "± 30539.71794005266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808892.3177734375,
            "unit": "ns",
            "range": "± 9766.676581053554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787391.4725260417,
            "unit": "ns",
            "range": "± 6718.135026169873"
          }
        ]
      }
    ]
  }
}