window.BENCHMARK_DATA = {
  "lastUpdate": 1695777372762,
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
        "date": 1695777363478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312561.7346938776,
            "unit": "ns",
            "range": "± 11829.093626830118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301810.2923076923,
            "unit": "ns",
            "range": "± 14054.739619523236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268158.23076923075,
            "unit": "ns",
            "range": "± 9346.979158675415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5131186.310344827,
            "unit": "ns",
            "range": "± 139204.64108003612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4908473,
            "unit": "ns",
            "range": "± 91875.23374373894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22141.129032258064,
            "unit": "ns",
            "range": "± 2496.99189994423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93772.65263157895,
            "unit": "ns",
            "range": "± 5391.0365595646035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80734.91071428571,
            "unit": "ns",
            "range": "± 3481.8856034510213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88738.8163265306,
            "unit": "ns",
            "range": "± 13814.98180509821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5754.329787234043,
            "unit": "ns",
            "range": "± 586.7125908521739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21130.395833333332,
            "unit": "ns",
            "range": "± 1521.932715015709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3961986.78125,
            "unit": "ns",
            "range": "± 119002.51202573194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4089358.621212121,
            "unit": "ns",
            "range": "± 185941.56567752184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4960896,
            "unit": "ns",
            "range": "± 88550.36670731522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4977456.260869565,
            "unit": "ns",
            "range": "± 122320.99423209761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12363810.396226415,
            "unit": "ns",
            "range": "± 516085.22268287087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574938.8548387096,
            "unit": "ns",
            "range": "± 71419.20167914774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995612.3571428573,
            "unit": "ns",
            "range": "± 84486.66410619875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336066.8076923075,
            "unit": "ns",
            "range": "± 95139.95932495687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10700360.373626374,
            "unit": "ns",
            "range": "± 703402.5753959368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55637.85897435898,
            "unit": "ns",
            "range": "± 2828.7206402140455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9656141.25,
            "unit": "ns",
            "range": "± 181978.07205723075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26442704.90909091,
            "unit": "ns",
            "range": "± 832061.3488011402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64056668.54545455,
            "unit": "ns",
            "range": "± 2018322.4252300176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124493137.05555555,
            "unit": "ns",
            "range": "± 2544266.730884084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246072149.88235295,
            "unit": "ns",
            "range": "± 4853797.548729562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900940.779427083,
            "unit": "ns",
            "range": "± 65289.35922695083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846017.153125,
            "unit": "ns",
            "range": "± 11559.110455255384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246228.887109375,
            "unit": "ns",
            "range": "± 10721.854641550382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063142.0453125,
            "unit": "ns",
            "range": "± 25992.389167237554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960476.8462239583,
            "unit": "ns",
            "range": "± 7693.874720310624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886286.5552083333,
            "unit": "ns",
            "range": "± 7567.895471070544"
          }
        ]
      }
    ]
  }
}