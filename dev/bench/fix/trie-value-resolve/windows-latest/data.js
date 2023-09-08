window.BENCHMARK_DATA = {
  "lastUpdate": 1694143080715,
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
          "id": "a3658ff45129453a2361cbb951adbc69bdefd8f6",
          "message": "Changelog",
          "timestamp": "2023-09-08T12:04:22+09:00",
          "tree_id": "4be2bac805b5852cf01c6cd193c2121c3865b21c",
          "url": "https://github.com/greymistcube/libplanet/commit/a3658ff45129453a2361cbb951adbc69bdefd8f6"
        },
        "date": 1694143058408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048331.5789473684,
            "unit": "ns",
            "range": "± 113063.69816711765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863334.693877551,
            "unit": "ns",
            "range": "± 143277.29088343002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1270408.2474226805,
            "unit": "ns",
            "range": "± 109992.61118186444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3144650,
            "unit": "ns",
            "range": "± 157613.85260608705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35212.345679012345,
            "unit": "ns",
            "range": "± 1772.0315118564754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5013723.076923077,
            "unit": "ns",
            "range": "± 20161.479519376953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13563917.647058824,
            "unit": "ns",
            "range": "± 274074.42245513835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33969735.71428572,
            "unit": "ns",
            "range": "± 386750.6443873959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68010165.38461539,
            "unit": "ns",
            "range": "± 1091057.6870222108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136342920,
            "unit": "ns",
            "range": "± 2235016.5231731827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3253773.9583333335,
            "unit": "ns",
            "range": "± 25792.04215477234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1024292.7455357143,
            "unit": "ns",
            "range": "± 8337.069397100398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730530.5304276316,
            "unit": "ns",
            "range": "± 15216.252416353249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882506.5848214286,
            "unit": "ns",
            "range": "± 29629.034019854993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 580338.4505208334,
            "unit": "ns",
            "range": "± 9727.884545826446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 530564.4714355469,
            "unit": "ns",
            "range": "± 7806.546240345368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2157270.707070707,
            "unit": "ns",
            "range": "± 155053.64197035314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273005.3191489363,
            "unit": "ns",
            "range": "± 128973.68625264603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803078.947368421,
            "unit": "ns",
            "range": "± 55432.68769865914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2468961.7021276597,
            "unit": "ns",
            "range": "± 91110.27850475318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4010504.347826087,
            "unit": "ns",
            "range": "± 150788.3578714392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184354.6511627907,
            "unit": "ns",
            "range": "± 9239.323338818374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175395.7142857143,
            "unit": "ns",
            "range": "± 7911.639484801751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154200,
            "unit": "ns",
            "range": "± 10694.283909329008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730671.4285714286,
            "unit": "ns",
            "range": "± 46893.96268459017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2482826.6666666665,
            "unit": "ns",
            "range": "± 44451.02387807871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15437.5,
            "unit": "ns",
            "range": "± 1650.4704273566817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63614.43298969072,
            "unit": "ns",
            "range": "± 5734.689574763428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52369.49152542373,
            "unit": "ns",
            "range": "± 2216.960814772622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62424.46808510638,
            "unit": "ns",
            "range": "± 10620.397155263528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3626.842105263158,
            "unit": "ns",
            "range": "± 527.0255013368428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13772.340425531915,
            "unit": "ns",
            "range": "± 1634.4677378553972"
          }
        ]
      }
    ]
  }
}