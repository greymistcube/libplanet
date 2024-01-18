window.BENCHMARK_DATA = {
  "lastUpdate": 1705567470619,
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
          "id": "46bdf3567a04df25b0114e104657b6d6f285e9b4",
          "message": "Updated tests",
          "timestamp": "2024-01-18T17:29:08+09:00",
          "tree_id": "9ecf5d78b18d3302db8b279468415eba52fde7b0",
          "url": "https://github.com/greymistcube/libplanet/commit/46bdf3567a04df25b0114e104657b6d6f285e9b4"
        },
        "date": 1705567456275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671660,
            "unit": "ns",
            "range": "± 97321.82497340381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18944079.076923076,
            "unit": "ns",
            "range": "± 196677.15251754652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46316786,
            "unit": "ns",
            "range": "± 621897.7825599638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92821131.76923077,
            "unit": "ns",
            "range": "± 1094614.8593149977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193830965.53703704,
            "unit": "ns",
            "range": "± 4759926.111953157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44111.104166666664,
            "unit": "ns",
            "range": "± 10144.16560598587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221831.92631578946,
            "unit": "ns",
            "range": "± 15676.20371722295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212638.42857142858,
            "unit": "ns",
            "range": "± 18136.413891605447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198618.60638297873,
            "unit": "ns",
            "range": "± 19632.365482543715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3729227.3846153845,
            "unit": "ns",
            "range": "± 23129.629037731604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445715.24,
            "unit": "ns",
            "range": "± 73138.91099492344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12682.280898876405,
            "unit": "ns",
            "range": "± 1031.751423427483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57745.557471264365,
            "unit": "ns",
            "range": "± 5013.279257657935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52288.083333333336,
            "unit": "ns",
            "range": "± 3151.8247008326966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66819.41489361702,
            "unit": "ns",
            "range": "± 11264.455678337865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4392.6082474226805,
            "unit": "ns",
            "range": "± 984.3899819674812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13418.130434782608,
            "unit": "ns",
            "range": "± 1353.0656540310565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1234085.1979166667,
            "unit": "ns",
            "range": "± 119235.24520359078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628656.0483870967,
            "unit": "ns",
            "range": "± 231432.44899878767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813847.7422680412,
            "unit": "ns",
            "range": "± 159107.07952843676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7816008.652777778,
            "unit": "ns",
            "range": "± 383786.7034499271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2919818.2926829266,
            "unit": "ns",
            "range": "± 102930.7872978838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3008353.688888889,
            "unit": "ns",
            "range": "± 113955.24653162234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3589916.696969697,
            "unit": "ns",
            "range": "± 113816.25280921132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3449787.3396226414,
            "unit": "ns",
            "range": "± 134866.59812612316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12855447.677083334,
            "unit": "ns",
            "range": "± 1901529.8689051268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4438643.556547619,
            "unit": "ns",
            "range": "± 105539.86885050766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382588.1253551135,
            "unit": "ns",
            "range": "± 42599.11889692288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883291.0396634615,
            "unit": "ns",
            "range": "± 10977.90333094982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2037798.58140625,
            "unit": "ns",
            "range": "± 54113.13485166867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656858.8285875822,
            "unit": "ns",
            "range": "± 13978.250428223291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568493.1041666666,
            "unit": "ns",
            "range": "± 9393.033930579411"
          }
        ]
      }
    ]
  }
}