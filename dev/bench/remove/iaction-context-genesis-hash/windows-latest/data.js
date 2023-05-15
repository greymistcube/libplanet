window.BENCHMARK_DATA = {
  "lastUpdate": 1684156048033,
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
          "id": "01bd4c5391da7022b66b58765776ae29d625d812",
          "message": "Removed IActionContext.GenesisHash",
          "timestamp": "2023-05-15T21:44:10+09:00",
          "tree_id": "8a6032b5d34baaf40369f884b9f534f1e8f0171a",
          "url": "https://github.com/greymistcube/libplanet/commit/01bd4c5391da7022b66b58765776ae29d625d812"
        },
        "date": 1684156025477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356197.9797979798,
            "unit": "ns",
            "range": "± 108647.28269355597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497596.8085106383,
            "unit": "ns",
            "range": "± 96393.04469555843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352985,
            "unit": "ns",
            "range": "± 52280.79324288474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5073556.25,
            "unit": "ns",
            "range": "± 185519.3032409296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42746.153846153844,
            "unit": "ns",
            "range": "± 2006.9470691728616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6909140,
            "unit": "ns",
            "range": "± 47149.86441428771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17722450,
            "unit": "ns",
            "range": "± 78638.78541425071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45224800,
            "unit": "ns",
            "range": "± 200796.10838573825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91086920,
            "unit": "ns",
            "range": "± 285284.8756694162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182644386.66666666,
            "unit": "ns",
            "range": "± 669313.7262115862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773325.901442308,
            "unit": "ns",
            "range": "± 9507.484041110305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500264.0625,
            "unit": "ns",
            "range": "± 1772.1684677712105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140557.6450892857,
            "unit": "ns",
            "range": "± 1623.6519070986633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581663.9229910714,
            "unit": "ns",
            "range": "± 9034.258425048189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816211.6071428572,
            "unit": "ns",
            "range": "± 2498.31790810745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741757.1516927084,
            "unit": "ns",
            "range": "± 1257.5737185630053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2983639.189189189,
            "unit": "ns",
            "range": "± 39886.78968018097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3237350,
            "unit": "ns",
            "range": "± 86132.52231300324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4112586.6666666665,
            "unit": "ns",
            "range": "± 74299.24885860141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3992252.272727273,
            "unit": "ns",
            "range": "± 148799.58034548906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6331269.565217392,
            "unit": "ns",
            "range": "± 117789.65626288942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257662.5,
            "unit": "ns",
            "range": "± 10020.770474823326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246126.19047619047,
            "unit": "ns",
            "range": "± 8912.393659579997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229892.70833333334,
            "unit": "ns",
            "range": "± 13186.566088989895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3857200,
            "unit": "ns",
            "range": "± 26943.787638483427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540392.3076923075,
            "unit": "ns",
            "range": "± 16704.912527879413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19006.842105263157,
            "unit": "ns",
            "range": "± 1623.8025133813549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87355.43478260869,
            "unit": "ns",
            "range": "± 6439.155021530723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66663.63636363637,
            "unit": "ns",
            "range": "± 3097.3257131639507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88598.97959183673,
            "unit": "ns",
            "range": "± 14081.877619783107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4720.833333333333,
            "unit": "ns",
            "range": "± 711.8421863345934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17683.333333333332,
            "unit": "ns",
            "range": "± 1347.8447214936991"
          }
        ]
      }
    ]
  }
}