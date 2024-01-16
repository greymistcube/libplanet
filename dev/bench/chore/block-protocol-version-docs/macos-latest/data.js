window.BENCHMARK_DATA = {
  "lastUpdate": 1705409370064,
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
          "id": "06fd4dd9c5d9888d1b7d2669c577f00520eb28ff",
          "message": "Docs",
          "timestamp": "2024-01-16T21:32:53+09:00",
          "tree_id": "5f14fdac4e17e4c8f554b2c10337981b433570d5",
          "url": "https://github.com/greymistcube/libplanet/commit/06fd4dd9c5d9888d1b7d2669c577f00520eb28ff"
        },
        "date": 1705409356336,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8573021.686046511,
            "unit": "ns",
            "range": "± 1098129.7517478499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19798843.133333333,
            "unit": "ns",
            "range": "± 350698.29130828736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48882640.548387095,
            "unit": "ns",
            "range": "± 1384247.7638941384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98579206.475,
            "unit": "ns",
            "range": "± 3394079.3200938404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200707378.92307693,
            "unit": "ns",
            "range": "± 1981740.5947204786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47865.96842105263,
            "unit": "ns",
            "range": "± 10116.16026459606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244898.35393258426,
            "unit": "ns",
            "range": "± 24469.339112982783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228047.43181818182,
            "unit": "ns",
            "range": "± 12892.469304865806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241301.64606741574,
            "unit": "ns",
            "range": "± 24587.939156567358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4118876.4285714286,
            "unit": "ns",
            "range": "± 71667.16907151611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3621913.5714285714,
            "unit": "ns",
            "range": "± 47800.52624020638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21129.729166666668,
            "unit": "ns",
            "range": "± 4718.986863789095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101135.76262626263,
            "unit": "ns",
            "range": "± 28404.60851211018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80469.15789473684,
            "unit": "ns",
            "range": "± 16855.409744204288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85666.12765957447,
            "unit": "ns",
            "range": "± 18049.801618803223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6658.521276595745,
            "unit": "ns",
            "range": "± 2163.9488892396143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18021.30612244898,
            "unit": "ns",
            "range": "± 4752.074057569172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1129541.8444444444,
            "unit": "ns",
            "range": "± 95393.79975495796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477680.040229885,
            "unit": "ns",
            "range": "± 205126.4076675651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1803556.9,
            "unit": "ns",
            "range": "± 200324.840040463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20281012.04255319,
            "unit": "ns",
            "range": "± 3077861.1391576272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3050380.581395349,
            "unit": "ns",
            "range": "± 186178.62178244567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3591364.31443299,
            "unit": "ns",
            "range": "± 763632.3710582115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562780.912371134,
            "unit": "ns",
            "range": "± 1069012.1569211665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4459637.973118279,
            "unit": "ns",
            "range": "± 849449.4349943048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26053953.71276596,
            "unit": "ns",
            "range": "± 4147119.890033131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4474177.2103949655,
            "unit": "ns",
            "range": "± 214284.45369186657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1378791.1170479911,
            "unit": "ns",
            "range": "± 36879.99215621791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896989.2883649553,
            "unit": "ns",
            "range": "± 6699.211180132964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2004807.1619791666,
            "unit": "ns",
            "range": "± 28337.344640920444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625453.1502604167,
            "unit": "ns",
            "range": "± 6582.946642048947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568461.43984375,
            "unit": "ns",
            "range": "± 4633.034619681405"
          }
        ]
      }
    ]
  }
}