window.BENCHMARK_DATA = {
  "lastUpdate": 1689903890786,
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
          "id": "5ceef2804f0ab187bbe575a75571e266756c2bfa",
          "message": "Changelog",
          "timestamp": "2023-07-21T10:29:11+09:00",
          "tree_id": "8ab99b0372c8aface09570a6bbc0942e1ca8b34d",
          "url": "https://github.com/greymistcube/libplanet/commit/5ceef2804f0ab187bbe575a75571e266756c2bfa"
        },
        "date": 1689903871046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7896775.321428572,
            "unit": "ns",
            "range": "± 225712.91185995602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20324279.40625,
            "unit": "ns",
            "range": "± 624801.1393257837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50427961.34615385,
            "unit": "ns",
            "range": "± 778147.4919138452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99302282.45,
            "unit": "ns",
            "range": "± 3481962.342333967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203945259.5,
            "unit": "ns",
            "range": "± 3217818.850734387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56796.510869565216,
            "unit": "ns",
            "range": "± 5729.257260598647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308885.8432835821,
            "unit": "ns",
            "range": "± 13674.705714580145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293523.9552238806,
            "unit": "ns",
            "range": "± 13741.013511242412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300202.26470588235,
            "unit": "ns",
            "range": "± 5922.721518962079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124995.6428571427,
            "unit": "ns",
            "range": "± 56611.03966760594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742118,
            "unit": "ns",
            "range": "± 65871.97821315439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18536.625,
            "unit": "ns",
            "range": "± 1391.464690243846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86858.67391304347,
            "unit": "ns",
            "range": "± 7528.045291739207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92719.69791666667,
            "unit": "ns",
            "range": "± 11092.070011470536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108374.36458333333,
            "unit": "ns",
            "range": "± 13425.514812530255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6021.010869565217,
            "unit": "ns",
            "range": "± 1104.5410711705256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19025.479166666668,
            "unit": "ns",
            "range": "± 2856.6039682007636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558379.59375,
            "unit": "ns",
            "range": "± 146076.34394428128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813025.635135135,
            "unit": "ns",
            "range": "± 141136.3039307809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2064323.268041237,
            "unit": "ns",
            "range": "± 160185.3302146269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5740742.160493827,
            "unit": "ns",
            "range": "± 286054.77571841277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294414.972972973,
            "unit": "ns",
            "range": "± 108797.40769314888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469448.8928571427,
            "unit": "ns",
            "range": "± 98399.91901131088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4358555.0227272725,
            "unit": "ns",
            "range": "± 148089.70537348004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3858652.839285714,
            "unit": "ns",
            "range": "± 160743.14611802011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7028799,
            "unit": "ns",
            "range": "± 257732.7099863383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6527868.696402616,
            "unit": "ns",
            "range": "± 240692.58924957816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987666.446484375,
            "unit": "ns",
            "range": "± 29343.965175224286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292677.0667067308,
            "unit": "ns",
            "range": "± 3432.364327953779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3008211.893804506,
            "unit": "ns",
            "range": "± 110534.79961488572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858717.4059895833,
            "unit": "ns",
            "range": "± 1923.8654473814493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722959.2190755209,
            "unit": "ns",
            "range": "± 3707.745596050275"
          }
        ]
      }
    ]
  }
}