window.BENCHMARK_DATA = {
  "lastUpdate": 1704865370651,
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
          "id": "c2c91f158d66c99735446b52331b68c5a2f18328",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T13:49:52+09:00",
          "tree_id": "e873ef18847f0b94944d2301a00558690c39a59a",
          "url": "https://github.com/greymistcube/libplanet/commit/c2c91f158d66c99735446b52331b68c5a2f18328"
        },
        "date": 1704865364548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3706676.0169270835,
            "unit": "ns",
            "range": "± 9535.253126940757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214321.0859375,
            "unit": "ns",
            "range": "± 1698.332798129442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782539.0807291666,
            "unit": "ns",
            "range": "± 4618.911935348667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967738.9596354167,
            "unit": "ns",
            "range": "± 24920.678782163723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613250.5743001302,
            "unit": "ns",
            "range": "± 2384.4380513320734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587188.8641276042,
            "unit": "ns",
            "range": "± 1736.8160184603519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474526.1794871795,
            "unit": "ns",
            "range": "± 86573.65050603227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625103.375,
            "unit": "ns",
            "range": "± 49997.877157435396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3209506.8181818184,
            "unit": "ns",
            "range": "± 100160.09217886339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3207456.75,
            "unit": "ns",
            "range": "± 152788.15653633754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14014673.115789473,
            "unit": "ns",
            "range": "± 1035073.7847718552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39866.86842105263,
            "unit": "ns",
            "range": "± 5670.594871140874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201006.65,
            "unit": "ns",
            "range": "± 8726.692475009639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197117.5918367347,
            "unit": "ns",
            "range": "± 7758.0602867769285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173731.38461538462,
            "unit": "ns",
            "range": "± 2856.4717904687222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275188.5384615385,
            "unit": "ns",
            "range": "± 22440.09553461313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840260.9285714286,
            "unit": "ns",
            "range": "± 39977.18507755736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15312.670212765957,
            "unit": "ns",
            "range": "± 3049.48299738845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66361.37373737374,
            "unit": "ns",
            "range": "± 9235.702086596582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58373.357894736844,
            "unit": "ns",
            "range": "± 7466.763873519044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63350.93877551021,
            "unit": "ns",
            "range": "± 14313.536583318119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3470.0934065934066,
            "unit": "ns",
            "range": "± 352.30305697800003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14101.721649484536,
            "unit": "ns",
            "range": "± 3101.60727400014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5755609.9,
            "unit": "ns",
            "range": "± 39794.53128221802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846082.076923076,
            "unit": "ns",
            "range": "± 113551.69719153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37636323.833333336,
            "unit": "ns",
            "range": "± 323047.90248093754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76786651.4,
            "unit": "ns",
            "range": "± 1060685.5102944914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155061538,
            "unit": "ns",
            "range": "± 951843.7162910901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983773.5376344086,
            "unit": "ns",
            "range": "± 80567.94444854809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876409.8372093022,
            "unit": "ns",
            "range": "± 68731.3200492393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601601.9247311829,
            "unit": "ns",
            "range": "± 135750.74723809367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12822190.25,
            "unit": "ns",
            "range": "± 987489.7689491158"
          }
        ]
      }
    ]
  }
}