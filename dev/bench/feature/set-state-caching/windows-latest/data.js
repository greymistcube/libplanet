window.BENCHMARK_DATA = {
  "lastUpdate": 1679836716989,
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
        "date": 1679836177126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104629.16666666667,
            "unit": "ns",
            "range": "± 6220.727942962212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4938696.770833333,
            "unit": "ns",
            "range": "± 17433.975235361784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524563.3713942308,
            "unit": "ns",
            "range": "± 2251.143264817834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164846.015625,
            "unit": "ns",
            "range": "± 4597.357512682426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643345.234375,
            "unit": "ns",
            "range": "± 4544.103280634118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819251.15234375,
            "unit": "ns",
            "range": "± 1456.288955794245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750136.9280133928,
            "unit": "ns",
            "range": "± 1471.4817306637278"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4798521.568080357,
            "unit": "ns",
            "range": "± 43646.161793961175"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6315850,
            "unit": "ns",
            "range": "± 162175.33453159512"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25943405.88235294,
            "unit": "ns",
            "range": "± 518942.91048075346"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6383868.686868687,
            "unit": "ns",
            "range": "± 507253.40357463737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28702325,
            "unit": "ns",
            "range": "± 558945.4672267531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108898.91304347826,
            "unit": "ns",
            "range": "± 10073.897229917966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195600,
            "unit": "ns",
            "range": "± 10080.204006889584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175968.75,
            "unit": "ns",
            "range": "± 12009.551571452133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3670700,
            "unit": "ns",
            "range": "± 28882.627197783684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9262014.285714285,
            "unit": "ns",
            "range": "± 127491.88123257017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24218.556701030928,
            "unit": "ns",
            "range": "± 2629.612213842376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59038.88888888889,
            "unit": "ns",
            "range": "± 5120.847332546239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39633.333333333336,
            "unit": "ns",
            "range": "± 2315.288622074745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100662.63736263737,
            "unit": "ns",
            "range": "± 14338.407228696002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5688.297872340426,
            "unit": "ns",
            "range": "± 953.3028474310541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18787.36842105263,
            "unit": "ns",
            "range": "± 2036.5930094710145"
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
        "date": 1679836696212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102837.75510204081,
            "unit": "ns",
            "range": "± 6835.176832471802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4794607.421875,
            "unit": "ns",
            "range": "± 37282.11816742904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518860.15625,
            "unit": "ns",
            "range": "± 6538.151780381678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161226.9252232143,
            "unit": "ns",
            "range": "± 10470.89385704829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671979.453125,
            "unit": "ns",
            "range": "± 22952.96626307721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825774.86328125,
            "unit": "ns",
            "range": "± 1974.038894882453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759600.95703125,
            "unit": "ns",
            "range": "± 1370.1861851087856"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5069575.494791667,
            "unit": "ns",
            "range": "± 54404.65327113297"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5474721.428571428,
            "unit": "ns",
            "range": "± 56545.60009505506"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24495484.375,
            "unit": "ns",
            "range": "± 704175.5752053076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6308650,
            "unit": "ns",
            "range": "± 111475.36292141658"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27480351.515151516,
            "unit": "ns",
            "range": "± 871282.2885412957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97349.49494949495,
            "unit": "ns",
            "range": "± 13185.322496403258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189976.28865979382,
            "unit": "ns",
            "range": "± 17606.371794016533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174363.63636363635,
            "unit": "ns",
            "range": "± 16309.865892074027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3639268.75,
            "unit": "ns",
            "range": "± 110058.5721991528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8590093.333333334,
            "unit": "ns",
            "range": "± 114423.58939276381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21324.48979591837,
            "unit": "ns",
            "range": "± 2524.603111585824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56132.32323232323,
            "unit": "ns",
            "range": "± 6481.241822978383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38426.31578947369,
            "unit": "ns",
            "range": "± 1529.650557175615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89464.28571428571,
            "unit": "ns",
            "range": "± 13578.603321341547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5188.421052631579,
            "unit": "ns",
            "range": "± 869.6860717419011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19378.125,
            "unit": "ns",
            "range": "± 2486.4349081831156"
          }
        ]
      }
    ]
  }
}