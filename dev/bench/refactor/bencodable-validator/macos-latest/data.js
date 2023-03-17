window.BENCHMARK_DATA = {
  "lastUpdate": 1679023798153,
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
          "id": "c10340be1d1cf8d232366c9d043a037d5cbd069b",
          "message": "Implemented IBencodable for ValidatorSet",
          "timestamp": "2023-03-17T12:04:50+09:00",
          "tree_id": "3a3a70c1894955d5d610a7a0355f6131318e3cc3",
          "url": "https://github.com/greymistcube/libplanet/commit/c10340be1d1cf8d232366c9d043a037d5cbd069b"
        },
        "date": 1679023782000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10833486.717391305,
            "unit": "ns",
            "range": "± 2626656.204971713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22929680.095505618,
            "unit": "ns",
            "range": "± 1578664.2859898473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56524914.676470585,
            "unit": "ns",
            "range": "± 1781250.5888175056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113791867.9893617,
            "unit": "ns",
            "range": "± 4430507.867317764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 237824807.8,
            "unit": "ns",
            "range": "± 8855603.378429871"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73944.90229885057,
            "unit": "ns",
            "range": "± 9780.625966151762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265601.6129032258,
            "unit": "ns",
            "range": "± 39373.73372291876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275082.24736842106,
            "unit": "ns",
            "range": "± 58146.784591764226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242368.63953488372,
            "unit": "ns",
            "range": "± 22025.8352827726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15410853.152631579,
            "unit": "ns",
            "range": "± 1042421.3513521824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12075688.048387097,
            "unit": "ns",
            "range": "± 1054457.0414895436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31021.241379310344,
            "unit": "ns",
            "range": "± 2985.0774987622476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81468.05056179775,
            "unit": "ns",
            "range": "± 15409.800921234302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72780.5,
            "unit": "ns",
            "range": "± 6881.508577767113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 167499.2191011236,
            "unit": "ns",
            "range": "± 37268.8642953254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11483.433333333332,
            "unit": "ns",
            "range": "± 1095.8846388069474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30459.83146067416,
            "unit": "ns",
            "range": "± 2999.599152144239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573071.1546391752,
            "unit": "ns",
            "range": "± 161930.27804578815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808985.364864865,
            "unit": "ns",
            "range": "± 95408.07158818208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2629262.797979798,
            "unit": "ns",
            "range": "± 215479.46888991818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6320986.866666666,
            "unit": "ns",
            "range": "± 282197.7383134673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3884610.709677419,
            "unit": "ns",
            "range": "± 397133.1312551951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6043744.4375,
            "unit": "ns",
            "range": "± 528576.9528403761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29674098.702127658,
            "unit": "ns",
            "range": "± 2560440.462009918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7122502.020618557,
            "unit": "ns",
            "range": "± 657357.3101520616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33920202.627659574,
            "unit": "ns",
            "range": "± 2893471.377049509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7803401.240451389,
            "unit": "ns",
            "range": "± 294516.79998514993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219993.3648158484,
            "unit": "ns",
            "range": "± 61445.91906610253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1492338.467610677,
            "unit": "ns",
            "range": "± 48438.06598523295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3376388.7979460685,
            "unit": "ns",
            "range": "± 147860.9473553685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913901.0198800223,
            "unit": "ns",
            "range": "± 25528.502468243238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894773.7303427419,
            "unit": "ns",
            "range": "± 26610.451974889034"
          }
        ]
      }
    ]
  }
}