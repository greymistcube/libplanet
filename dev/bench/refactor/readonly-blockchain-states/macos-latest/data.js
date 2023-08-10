window.BENCHMARK_DATA = {
  "lastUpdate": 1691645877381,
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
          "id": "70d7b370f6d49c724d92636de09e0b04f4a36433",
          "message": "Readonly state root from BlockChainStates",
          "timestamp": "2023-08-10T14:21:04+09:00",
          "tree_id": "c925c4650a2aed4912f3bb5385e4b96d9681a5c7",
          "url": "https://github.com/greymistcube/libplanet/commit/70d7b370f6d49c724d92636de09e0b04f4a36433"
        },
        "date": 1691645864054,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9195781.25,
            "unit": "ns",
            "range": "± 558362.0985751088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22753121.822916668,
            "unit": "ns",
            "range": "± 1419667.8683996624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55998156.11764706,
            "unit": "ns",
            "range": "± 1699039.9536576446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108249809.11538461,
            "unit": "ns",
            "range": "± 2855213.1607762715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221851793.9,
            "unit": "ns",
            "range": "± 5001718.81270312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76300.53448275862,
            "unit": "ns",
            "range": "± 5803.870509767249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326727.17741935485,
            "unit": "ns",
            "range": "± 28782.04462445947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312008.58490566036,
            "unit": "ns",
            "range": "± 12903.99366987118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303106.756097561,
            "unit": "ns",
            "range": "± 10814.417043420528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4047521.595238095,
            "unit": "ns",
            "range": "± 90934.85555654926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894335.9210526315,
            "unit": "ns",
            "range": "± 85583.01955756552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21157.463917525773,
            "unit": "ns",
            "range": "± 3570.2857438803585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102343.35789473684,
            "unit": "ns",
            "range": "± 19035.829259424263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110733.24468085106,
            "unit": "ns",
            "range": "± 22852.23670139734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100622.68421052632,
            "unit": "ns",
            "range": "± 15876.414675290178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6790.921052631579,
            "unit": "ns",
            "range": "± 1456.225137338283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21747.682795698925,
            "unit": "ns",
            "range": "± 4470.38062756998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679481.0543478262,
            "unit": "ns",
            "range": "± 142126.4192342074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3170083.3936170214,
            "unit": "ns",
            "range": "± 200337.40009404178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180595.8541666665,
            "unit": "ns",
            "range": "± 231833.23035946512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5753196.31884058,
            "unit": "ns",
            "range": "± 244266.60053927655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3539703.9393939395,
            "unit": "ns",
            "range": "± 244809.58060758488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3693833.724489796,
            "unit": "ns",
            "range": "± 327058.1901132271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4581396.683673469,
            "unit": "ns",
            "range": "± 271146.3968724161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083792.452631579,
            "unit": "ns",
            "range": "± 331206.9976651732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6950474.62345679,
            "unit": "ns",
            "range": "± 363541.4880022424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5466873.385602678,
            "unit": "ns",
            "range": "± 95646.09489579704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1656932.0902622768,
            "unit": "ns",
            "range": "± 11883.63935708232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1048070.2354166667,
            "unit": "ns",
            "range": "± 13553.41671486399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506314.9453125,
            "unit": "ns",
            "range": "± 32358.176757547117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910005.3427010996,
            "unit": "ns",
            "range": "± 25195.91457813514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894561.5957845052,
            "unit": "ns",
            "range": "± 29635.329067102924"
          }
        ]
      }
    ]
  }
}