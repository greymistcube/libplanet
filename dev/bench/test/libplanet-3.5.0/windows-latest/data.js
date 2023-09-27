window.BENCHMARK_DATA = {
  "lastUpdate": 1695777427152,
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1695777403125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326111.2676056337,
            "unit": "ns",
            "range": "± 61410.05164186019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2654320.588235294,
            "unit": "ns",
            "range": "± 125945.79686874249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2036014.1414141415,
            "unit": "ns",
            "range": "± 138023.24930605065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8363819.5121951215,
            "unit": "ns",
            "range": "± 299523.04019850644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51567.74193548387,
            "unit": "ns",
            "range": "± 3932.61615794401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7602442.105263158,
            "unit": "ns",
            "range": "± 167499.35427998082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21237528.57142857,
            "unit": "ns",
            "range": "± 192641.55006951853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54081930.76923077,
            "unit": "ns",
            "range": "± 1472118.8318255374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105872669.23076923,
            "unit": "ns",
            "range": "± 975218.504904256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213317600,
            "unit": "ns",
            "range": "± 1735601.0745560168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4553598.125,
            "unit": "ns",
            "range": "± 26128.523315394923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1456548.046875,
            "unit": "ns",
            "range": "± 8814.30817867866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059201.771763393,
            "unit": "ns",
            "range": "± 6862.839814446061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643612.276785714,
            "unit": "ns",
            "range": "± 10220.026587600596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838299.21875,
            "unit": "ns",
            "range": "± 4747.585147500954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768810.9505208334,
            "unit": "ns",
            "range": "± 4831.47373768721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374548,
            "unit": "ns",
            "range": "± 122267.22697369372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3539700,
            "unit": "ns",
            "range": "± 81836.51385536899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4261115.151515151,
            "unit": "ns",
            "range": "± 132150.00265137182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193735.8208955224,
            "unit": "ns",
            "range": "± 187384.347120849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10446416.666666666,
            "unit": "ns",
            "range": "± 465273.1059360132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268377.77777777775,
            "unit": "ns",
            "range": "± 8274.991967578704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252870.37037037036,
            "unit": "ns",
            "range": "± 9467.095540525886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232084,
            "unit": "ns",
            "range": "± 14832.38825726125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189392.8571428573,
            "unit": "ns",
            "range": "± 51981.9600998671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870230.769230769,
            "unit": "ns",
            "range": "± 61985.87721698366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22601.041666666668,
            "unit": "ns",
            "range": "± 2648.7532237546925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89767.74193548386,
            "unit": "ns",
            "range": "± 6393.613683409315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79829.47368421052,
            "unit": "ns",
            "range": "± 6578.153295863101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91219.19191919192,
            "unit": "ns",
            "range": "± 16597.834114712852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6014.583333333333,
            "unit": "ns",
            "range": "± 981.4038459125426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21439.56043956044,
            "unit": "ns",
            "range": "± 2289.0987610789402"
          }
        ]
      }
    ]
  }
}