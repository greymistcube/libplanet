window.BENCHMARK_DATA = {
  "lastUpdate": 1700482284196,
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
          "id": "17fb083308c0f6352347441c8879bf63319bb6b6",
          "message": "Revert \"Prepare 3.6.2\"\n\nThis reverts commit 585f4ed3ed66691c663e6e789ea87a50001ec8ea.",
          "timestamp": "2023-11-20T21:00:16+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/greymistcube/libplanet/commit/17fb083308c0f6352347441c8879bf63319bb6b6"
        },
        "date": 1700482278148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5671162.928571428,
            "unit": "ns",
            "range": "± 38414.66303522511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15060282.133333333,
            "unit": "ns",
            "range": "± 99602.02363396516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37298253.75,
            "unit": "ns",
            "range": "± 202928.48390734065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75303192.64285715,
            "unit": "ns",
            "range": "± 645942.2479028491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153363164.86666667,
            "unit": "ns",
            "range": "± 1328317.8386441504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 942102,
            "unit": "ns",
            "range": "± 73178.4481480832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855845.5609756098,
            "unit": "ns",
            "range": "± 66715.39097578939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387499.3041237113,
            "unit": "ns",
            "range": "± 111239.43192441916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5778619.603092783,
            "unit": "ns",
            "range": "± 354736.3951405937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415752.7532467535,
            "unit": "ns",
            "range": "± 122907.59278793624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2491161.8846153845,
            "unit": "ns",
            "range": "± 101832.65383464203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3208107.590909091,
            "unit": "ns",
            "range": "± 77973.4592634901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2923652.3474576273,
            "unit": "ns",
            "range": "± 127310.68509370317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6546087.878787879,
            "unit": "ns",
            "range": "± 189672.2419856418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40396.90625,
            "unit": "ns",
            "range": "± 5122.956636199606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722492.76328125,
            "unit": "ns",
            "range": "± 45534.760224601305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1147461.5867745536,
            "unit": "ns",
            "range": "± 3854.2791142090045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737741.5453491211,
            "unit": "ns",
            "range": "± 14404.873993176625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959819.2449776786,
            "unit": "ns",
            "range": "± 17746.081378112303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624104.2273888221,
            "unit": "ns",
            "range": "± 1148.3506376618468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564043.8106770833,
            "unit": "ns",
            "range": "± 2021.2416422549347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193612.2,
            "unit": "ns",
            "range": "± 7716.2064963217235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189416.51960784313,
            "unit": "ns",
            "range": "± 6058.813994471843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165141.85294117648,
            "unit": "ns",
            "range": "± 3374.9223313503167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070295.153846154,
            "unit": "ns",
            "range": "± 28237.10603929445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2815238,
            "unit": "ns",
            "range": "± 38100.29075817064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13400.356321839081,
            "unit": "ns",
            "range": "± 1256.6433600465587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67672.29591836735,
            "unit": "ns",
            "range": "± 9076.23903581439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51708.6,
            "unit": "ns",
            "range": "± 1593.883546239925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62104.903225806454,
            "unit": "ns",
            "range": "± 9444.342502564716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2959.577319587629,
            "unit": "ns",
            "range": "± 695.9431675050106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12928.773195876289,
            "unit": "ns",
            "range": "± 2393.5386525722515"
          }
        ]
      }
    ]
  }
}