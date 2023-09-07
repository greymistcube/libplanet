window.BENCHMARK_DATA = {
  "lastUpdate": 1694059367120,
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
          "id": "700d014b7cabf220e7891ba1c4c5dfa924e3d8b1",
          "message": "Remove trie mutation from Account",
          "timestamp": "2023-09-07T12:47:30+09:00",
          "tree_id": "4a7a764a6352819fe691068027abef975c3a4ed5",
          "url": "https://github.com/greymistcube/libplanet/commit/700d014b7cabf220e7891ba1c4c5dfa924e3d8b1"
        },
        "date": 1694059342929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7510717.105263158,
            "unit": "ns",
            "range": "± 136017.59303973013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19470121.44117647,
            "unit": "ns",
            "range": "± 386162.4783788345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45771172.21428572,
            "unit": "ns",
            "range": "± 588210.1544464135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91596904.92307693,
            "unit": "ns",
            "range": "± 781069.6928119861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195123691.57142857,
            "unit": "ns",
            "range": "± 1932517.5528842586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51920.6404494382,
            "unit": "ns",
            "range": "± 4150.078285809227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285083.1081081081,
            "unit": "ns",
            "range": "± 13249.74014174501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278023.84146341466,
            "unit": "ns",
            "range": "± 14127.308989006086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262524.3333333333,
            "unit": "ns",
            "range": "± 11372.062026131869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841724.5833333335,
            "unit": "ns",
            "range": "± 97641.23197792348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3506587.4,
            "unit": "ns",
            "range": "± 91961.8870950533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17126.494382022473,
            "unit": "ns",
            "range": "± 1662.8115711020316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80175.42857142857,
            "unit": "ns",
            "range": "± 6838.446575576234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74858.97916666667,
            "unit": "ns",
            "range": "± 6946.320299613642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83177.54166666667,
            "unit": "ns",
            "range": "± 11584.133459100234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4705.933333333333,
            "unit": "ns",
            "range": "± 402.7834838116636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16808.64606741573,
            "unit": "ns",
            "range": "± 1895.6188576351153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406960.1515151516,
            "unit": "ns",
            "range": "± 136801.55882028714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2696935.202898551,
            "unit": "ns",
            "range": "± 116652.0546239441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811511.5102040817,
            "unit": "ns",
            "range": "± 150536.27652045942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5166424.296296297,
            "unit": "ns",
            "range": "± 191956.02393459415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3177513.0625,
            "unit": "ns",
            "range": "± 61393.3141701589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245982.6153846155,
            "unit": "ns",
            "range": "± 166331.14307560434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109033.0714285714,
            "unit": "ns",
            "range": "± 142214.70876989822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3551132.5701754387,
            "unit": "ns",
            "range": "± 153298.11129542656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6388327.1034482755,
            "unit": "ns",
            "range": "± 171903.64041132896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4860346.785714285,
            "unit": "ns",
            "range": "± 25781.163428486045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566895.044140625,
            "unit": "ns",
            "range": "± 7410.688659982313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 967113.2454618566,
            "unit": "ns",
            "range": "± 19477.28116622346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2314319.8309895834,
            "unit": "ns",
            "range": "± 34537.45771837945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800021.4888392857,
            "unit": "ns",
            "range": "± 3473.645730758192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694171.6845005581,
            "unit": "ns",
            "range": "± 7705.482951051598"
          }
        ]
      }
    ]
  }
}