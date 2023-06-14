window.BENCHMARK_DATA = {
  "lastUpdate": 1686721638207,
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
          "id": "4ac1610cd444d14c98eca5e393878591f2f85031",
          "message": "Introduce BlockChainStates.GetStateRoot; expand BlockChainStates query\nscope",
          "timestamp": "2023-06-14T14:30:04+09:00",
          "tree_id": "31b203bf80340635c6bc8123a588dfb41aa59cfa",
          "url": "https://github.com/greymistcube/libplanet/commit/4ac1610cd444d14c98eca5e393878591f2f85031"
        },
        "date": 1686721629935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779166.2054794522,
            "unit": "ns",
            "range": "± 74735.33812616486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3522567.2448979593,
            "unit": "ns",
            "range": "± 140201.48384773053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2875192.6619718308,
            "unit": "ns",
            "range": "± 137347.00220618927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6980701.193548387,
            "unit": "ns",
            "range": "± 211939.87905841277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4372167.333333333,
            "unit": "ns",
            "range": "± 111767.57188847825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4530839.928571428,
            "unit": "ns",
            "range": "± 69960.67818585862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5542961.761904762,
            "unit": "ns",
            "range": "± 130029.73941868251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5693059.2105263155,
            "unit": "ns",
            "range": "± 195363.0026965268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8817550.208333334,
            "unit": "ns",
            "range": "± 193840.48356203458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10540019.47368421,
            "unit": "ns",
            "range": "± 226410.00922892286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27982620.14814815,
            "unit": "ns",
            "range": "± 782601.5418874854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67712457.8,
            "unit": "ns",
            "range": "± 575654.3835813787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139034492.93333334,
            "unit": "ns",
            "range": "± 1045794.7111825987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275883392.8666667,
            "unit": "ns",
            "range": "± 1977414.8919069949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7322427.7375,
            "unit": "ns",
            "range": "± 26246.284133814595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273172.8177083335,
            "unit": "ns",
            "range": "± 3687.015994817762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1663723.3936197916,
            "unit": "ns",
            "range": "± 5708.853690841626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126273.17890625,
            "unit": "ns",
            "range": "± 9809.400486204753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997193.1282552084,
            "unit": "ns",
            "range": "± 1539.7292919973008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933489.0006277902,
            "unit": "ns",
            "range": "± 2803.3403453041856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56582.45054945055,
            "unit": "ns",
            "range": "± 3281.6231798836525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342638.62264150946,
            "unit": "ns",
            "range": "± 14309.99646323992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334616.45652173914,
            "unit": "ns",
            "range": "± 12803.125546706722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299253.86666666664,
            "unit": "ns",
            "range": "± 8786.32051478352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5446167.142857143,
            "unit": "ns",
            "range": "± 55831.921202917525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4965942.571428572,
            "unit": "ns",
            "range": "± 52166.358432517496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24623.703296703297,
            "unit": "ns",
            "range": "± 1576.4684899730473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108802.21276595745,
            "unit": "ns",
            "range": "± 6766.893243527465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97769.49397590362,
            "unit": "ns",
            "range": "± 5009.849163722991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113188.85714285714,
            "unit": "ns",
            "range": "± 8191.631823461866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7247.020618556701,
            "unit": "ns",
            "range": "± 825.2438273446503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22965.536082474227,
            "unit": "ns",
            "range": "± 1783.9097514416642"
          }
        ]
      }
    ]
  }
}