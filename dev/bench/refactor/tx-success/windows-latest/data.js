window.BENCHMARK_DATA = {
  "lastUpdate": 1689127542079,
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
          "id": "aaac5d80bcb28312ff9d0464f0e0481f27b77455",
          "message": "Changelog",
          "timestamp": "2023-07-12T10:49:20+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/greymistcube/libplanet/commit/aaac5d80bcb28312ff9d0464f0e0481f27b77455"
        },
        "date": 1689127521142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427803.0612244897,
            "unit": "ns",
            "range": "± 86713.83967125604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606177.6315789474,
            "unit": "ns",
            "range": "± 131991.10636572875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826901.0869565217,
            "unit": "ns",
            "range": "± 99845.263243742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4830032.432432433,
            "unit": "ns",
            "range": "± 163564.52864245974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47560,
            "unit": "ns",
            "range": "± 2667.1450881698047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533357.894736842,
            "unit": "ns",
            "range": "± 164616.83563080485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20901535.714285713,
            "unit": "ns",
            "range": "± 247543.6988839402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490226.666666664,
            "unit": "ns",
            "range": "± 645160.2452842535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105531985.71428572,
            "unit": "ns",
            "range": "± 1500759.1965182375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209929960,
            "unit": "ns",
            "range": "± 2169599.6140828775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4963682.271634615,
            "unit": "ns",
            "range": "± 23473.418265996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566053.4244791667,
            "unit": "ns",
            "range": "± 12823.794198959498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211802.1065848214,
            "unit": "ns",
            "range": "± 4938.916424106009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704273.995535714,
            "unit": "ns",
            "range": "± 13907.871952694006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854972.3933293269,
            "unit": "ns",
            "range": "± 2080.5324644042503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772828.2435825893,
            "unit": "ns",
            "range": "± 3833.7663572558213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354847.8260869565,
            "unit": "ns",
            "range": "± 82731.47619951065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517834.4827586208,
            "unit": "ns",
            "range": "± 101310.04137181377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300818.75,
            "unit": "ns",
            "range": "± 82038.97625519226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3871316.6666666665,
            "unit": "ns",
            "range": "± 112252.99960152614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6618931.37254902,
            "unit": "ns",
            "range": "± 269827.23620138573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267412.6984126984,
            "unit": "ns",
            "range": "± 12289.025947167607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260650,
            "unit": "ns",
            "range": "± 12192.951936388372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236178.57142857142,
            "unit": "ns",
            "range": "± 15081.57372356683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4268878.571428572,
            "unit": "ns",
            "range": "± 44152.06552484142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894521.4285714286,
            "unit": "ns",
            "range": "± 47527.20967341402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21277.083333333332,
            "unit": "ns",
            "range": "± 2097.1900582328913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89444.68085106384,
            "unit": "ns",
            "range": "± 6075.025855447906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82326.04166666667,
            "unit": "ns",
            "range": "± 6341.9280613302235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101485.26315789473,
            "unit": "ns",
            "range": "± 14064.047784673718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6258.585858585859,
            "unit": "ns",
            "range": "± 1262.8935111933654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18600,
            "unit": "ns",
            "range": "± 1598.1310924031693"
          }
        ]
      }
    ]
  }
}