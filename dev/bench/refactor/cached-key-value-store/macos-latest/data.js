window.BENCHMARK_DATA = {
  "lastUpdate": 1699946625566,
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
          "id": "0f9075efda158932155ab958a4efe01d5336e91b",
          "message": "Added logging",
          "timestamp": "2023-11-14T15:40:51+09:00",
          "tree_id": "6c7453fc44533f705b7c7c8d0ddfdef09a0f7838",
          "url": "https://github.com/greymistcube/libplanet/commit/0f9075efda158932155ab958a4efe01d5336e91b"
        },
        "date": 1699946611706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9038282.489690721,
            "unit": "ns",
            "range": "± 549941.1436193174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21695388.05882353,
            "unit": "ns",
            "range": "± 883580.9136058432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53063313.11764706,
            "unit": "ns",
            "range": "± 1712111.7180423005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111030800.10655738,
            "unit": "ns",
            "range": "± 4722137.031955868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223910338.65,
            "unit": "ns",
            "range": "± 5076061.457711318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72637.89772727272,
            "unit": "ns",
            "range": "± 9027.379888128806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349974.4193548387,
            "unit": "ns",
            "range": "± 53675.7739935938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345029.2052631579,
            "unit": "ns",
            "range": "± 49050.52249312311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322473.97826086957,
            "unit": "ns",
            "range": "± 36852.220372362215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4036102.1707317075,
            "unit": "ns",
            "range": "± 144172.97248754746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691174.6896551726,
            "unit": "ns",
            "range": "± 100361.74245024967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18262.860215053763,
            "unit": "ns",
            "range": "± 2223.042502827648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86358.85106382979,
            "unit": "ns",
            "range": "± 11117.885379222818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108340.29569892473,
            "unit": "ns",
            "range": "± 13700.22374504625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108898.9623655914,
            "unit": "ns",
            "range": "± 15912.33470596832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6965.139784946236,
            "unit": "ns",
            "range": "± 1418.392527011674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18005.695652173912,
            "unit": "ns",
            "range": "± 2584.184653606807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384751,
            "unit": "ns",
            "range": "± 107327.82459612994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2674571.9365079366,
            "unit": "ns",
            "range": "± 121472.1334937031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2292245.580645161,
            "unit": "ns",
            "range": "± 178564.68528143855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10808493.92,
            "unit": "ns",
            "range": "± 435657.4124981406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369359.5894736843,
            "unit": "ns",
            "range": "± 264791.1642397784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3884349.8421052634,
            "unit": "ns",
            "range": "± 537104.9526899077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749587.244680851,
            "unit": "ns",
            "range": "± 471502.9703459257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4415744.948453608,
            "unit": "ns",
            "range": "± 316200.2037570294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19466689.22,
            "unit": "ns",
            "range": "± 2349822.5243224646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6001263.418308424,
            "unit": "ns",
            "range": "± 289542.1958303441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1780186.0918996711,
            "unit": "ns",
            "range": "± 38983.3089763563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053684.2299479167,
            "unit": "ns",
            "range": "± 17239.229690019747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2525529.908653846,
            "unit": "ns",
            "range": "± 88085.66225931955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907821.4302394701,
            "unit": "ns",
            "range": "± 22252.6624490308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828935.58828125,
            "unit": "ns",
            "range": "± 5326.25443768748"
          }
        ]
      }
    ]
  }
}