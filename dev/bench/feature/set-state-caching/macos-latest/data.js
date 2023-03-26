window.BENCHMARK_DATA = {
  "lastUpdate": 1679836392802,
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
          "id": "a3a3a05bbd9141cd110fc544a4725588b0b71c4b",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T21:52:29+09:00",
          "tree_id": "9e82adaed50e472317a77409dbc78eda575f2d6f",
          "url": "https://github.com/greymistcube/libplanet/commit/a3a3a05bbd9141cd110fc544a4725588b0b71c4b"
        },
        "date": 1679836235553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138995.52222222224,
            "unit": "ns",
            "range": "± 15374.238668445736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107014.48969072165,
            "unit": "ns",
            "range": "± 13523.06399921911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251519.02040816325,
            "unit": "ns",
            "range": "± 37815.8464891413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237189.31578947368,
            "unit": "ns",
            "range": "± 27408.26794121646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4287985.13,
            "unit": "ns",
            "range": "± 402333.97220342077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11777699.4,
            "unit": "ns",
            "range": "± 678495.0928621833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30428.989361702126,
            "unit": "ns",
            "range": "± 9462.165224821489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62842.86170212766,
            "unit": "ns",
            "range": "± 10904.317116462038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58582.778947368424,
            "unit": "ns",
            "range": "± 11900.436891836087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150851.71276595743,
            "unit": "ns",
            "range": "± 28799.96911470579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9853.952631578948,
            "unit": "ns",
            "range": "± 1078.5076940553638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21317.163265306124,
            "unit": "ns",
            "range": "± 4926.015120029613"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5199771.039469401,
            "unit": "ns",
            "range": "± 388011.9465367754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6359419.348484849,
            "unit": "ns",
            "range": "± 686187.9112748059"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27794891.054054055,
            "unit": "ns",
            "range": "± 865017.9640650677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8055941.1632653065,
            "unit": "ns",
            "range": "± 924779.6572315891"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37470800.54545455,
            "unit": "ns",
            "range": "± 3289592.810248502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7379376.890419408,
            "unit": "ns",
            "range": "± 251313.2762911914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965993.3315104167,
            "unit": "ns",
            "range": "± 35357.18788250489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400225.6904523983,
            "unit": "ns",
            "range": "± 51437.54087981654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2810163.0729851974,
            "unit": "ns",
            "range": "± 141422.19974249243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944506.7919921875,
            "unit": "ns",
            "range": "± 25107.572765762874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798618.5649857954,
            "unit": "ns",
            "range": "± 19576.71984818271"
          }
        ]
      },
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
          "id": "49a8555cfbbb28ac03f9b44e572fee87963625ab",
          "message": "Cache during commit",
          "timestamp": "2023-03-26T22:00:05+09:00",
          "tree_id": "0378e668cb7a863f559be06c1ee8577a1c7f451d",
          "url": "https://github.com/greymistcube/libplanet/commit/49a8555cfbbb28ac03f9b44e572fee87963625ab"
        },
        "date": 1679836377302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 119714.7924528302,
            "unit": "ns",
            "range": "± 4938.198263609024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98399.60215053764,
            "unit": "ns",
            "range": "± 13201.803961168553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218571.07142857142,
            "unit": "ns",
            "range": "± 24781.734014552763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198573.6875,
            "unit": "ns",
            "range": "± 19853.427033512377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3639362.135135135,
            "unit": "ns",
            "range": "± 123353.00026643547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9835757.884615384,
            "unit": "ns",
            "range": "± 138040.58299375736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18842.139784946237,
            "unit": "ns",
            "range": "± 3510.657230031083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50658.802083333336,
            "unit": "ns",
            "range": "± 4967.885339849377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46275.34042553192,
            "unit": "ns",
            "range": "± 4740.132579592225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106036.60215053764,
            "unit": "ns",
            "range": "± 14493.17945144317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7207.3125,
            "unit": "ns",
            "range": "± 1049.559208856145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19885.445054945056,
            "unit": "ns",
            "range": "± 3613.8816446297656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4672263.03766741,
            "unit": "ns",
            "range": "± 80407.25263884047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6133246.533333333,
            "unit": "ns",
            "range": "± 54696.15889081722"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27422871.229166668,
            "unit": "ns",
            "range": "± 1870844.2308163862"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6899663.885416667,
            "unit": "ns",
            "range": "± 440781.4597090006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29661687.296296295,
            "unit": "ns",
            "range": "± 807757.7978434555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6853466.248161765,
            "unit": "ns",
            "range": "± 136353.45635842058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999007.316685268,
            "unit": "ns",
            "range": "± 23434.43754807336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313375.7049386161,
            "unit": "ns",
            "range": "± 8736.596916963776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801343.93828125,
            "unit": "ns",
            "range": "± 47044.87590581598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911534.6931501116,
            "unit": "ns",
            "range": "± 15251.144326072226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750944.5251850329,
            "unit": "ns",
            "range": "± 16086.71566485677"
          }
        ]
      }
    ]
  }
}