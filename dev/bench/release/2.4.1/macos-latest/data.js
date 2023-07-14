window.BENCHMARK_DATA = {
  "lastUpdate": 1689323080622,
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
          "id": "b888da88b58bc5066f7f54694e07839ab7292b99",
          "message": "Release 2.4.1",
          "timestamp": "2023-07-14T17:05:25+09:00",
          "tree_id": "9681d8a9488eec9cce736a5b57461ef0d7d77eca",
          "url": "https://github.com/greymistcube/libplanet/commit/b888da88b58bc5066f7f54694e07839ab7292b99"
        },
        "date": 1689323050877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8576225.857142856,
            "unit": "ns",
            "range": "± 91358.3414303319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21496544.633333333,
            "unit": "ns",
            "range": "± 212424.0305574364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55455695.833333336,
            "unit": "ns",
            "range": "± 901880.6213865136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107806900.5,
            "unit": "ns",
            "range": "± 771854.0441636834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221901858.93333334,
            "unit": "ns",
            "range": "± 2124772.0047159167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82547.43333333333,
            "unit": "ns",
            "range": "± 6580.166883919034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363878.3333333333,
            "unit": "ns",
            "range": "± 17022.5416933713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348842.6493506493,
            "unit": "ns",
            "range": "± 17744.506257138793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340734.95,
            "unit": "ns",
            "range": "± 7726.196159989182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4469592.066666666,
            "unit": "ns",
            "range": "± 56456.656568767954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4073998.088235294,
            "unit": "ns",
            "range": "± 81199.96271247514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27218.714285714286,
            "unit": "ns",
            "range": "± 6349.360139854017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92902.28421052631,
            "unit": "ns",
            "range": "± 10434.47504889559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114873.81818181818,
            "unit": "ns",
            "range": "± 17213.335800325516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119898.62105263158,
            "unit": "ns",
            "range": "± 14492.307087803918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9704.183673469388,
            "unit": "ns",
            "range": "± 1879.3710307097165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24855.65168539326,
            "unit": "ns",
            "range": "± 4220.657356979543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707828.8181818181,
            "unit": "ns",
            "range": "± 211878.29921271483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198186.4444444445,
            "unit": "ns",
            "range": "± 221285.40077228754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170980.5217391304,
            "unit": "ns",
            "range": "± 184156.9898466635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5972271.714285715,
            "unit": "ns",
            "range": "± 227986.1705136531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3409223.923076923,
            "unit": "ns",
            "range": "± 75419.51765964727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667544.3513513515,
            "unit": "ns",
            "range": "± 183346.5595101541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4578239.166666667,
            "unit": "ns",
            "range": "± 85208.33876083346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4172346.5833333335,
            "unit": "ns",
            "range": "± 64518.43578876341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7416770.392156863,
            "unit": "ns",
            "range": "± 298660.2457365278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7168004.854456019,
            "unit": "ns",
            "range": "± 199888.92893642964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895812.8403645833,
            "unit": "ns",
            "range": "± 32239.53723160625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301067.75703125,
            "unit": "ns",
            "range": "± 7786.409741194436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527125.9736328125,
            "unit": "ns",
            "range": "± 63194.12883177737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835954.3664362981,
            "unit": "ns",
            "range": "± 2832.8355983748984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724574.9583333334,
            "unit": "ns",
            "range": "± 9430.306962999315"
          }
        ]
      }
    ]
  }
}