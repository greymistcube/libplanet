window.BENCHMARK_DATA = {
  "lastUpdate": 1679981307554,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679896757930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103449.04545454546,
            "unit": "ns",
            "range": "± 2509.9740935349214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4456942.783072917,
            "unit": "ns",
            "range": "± 40286.927710097756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6025980.071428572,
            "unit": "ns",
            "range": "± 78103.19189130423"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25346923.866666667,
            "unit": "ns",
            "range": "± 384117.84165406966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6671887,
            "unit": "ns",
            "range": "± 177963.62302916477"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28201539.2,
            "unit": "ns",
            "range": "± 382739.8418420981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5864727.03125,
            "unit": "ns",
            "range": "± 22489.49253278501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1949187.2020089286,
            "unit": "ns",
            "range": "± 1899.2829540899452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352358.61953125,
            "unit": "ns",
            "range": "± 943.0303217647261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584150.3571428573,
            "unit": "ns",
            "range": "± 2902.5619155269883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865866.9093191965,
            "unit": "ns",
            "range": "± 6392.863820722894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763605.944936899,
            "unit": "ns",
            "range": "± 510.24560177660436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93137.61458333333,
            "unit": "ns",
            "range": "± 9389.382469879465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196572.04494382022,
            "unit": "ns",
            "range": "± 12790.108610589841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168324.6875,
            "unit": "ns",
            "range": "± 3127.7831706337956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773938.4285714286,
            "unit": "ns",
            "range": "± 26360.192075622974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9518538.2,
            "unit": "ns",
            "range": "± 50777.43204444836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17253.864583333332,
            "unit": "ns",
            "range": "± 1927.9166209301616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48924.336842105266,
            "unit": "ns",
            "range": "± 5822.556772990029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41370.16161616162,
            "unit": "ns",
            "range": "± 4472.6136008594885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91102.05555555556,
            "unit": "ns",
            "range": "± 12179.917643640603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5135.4631578947365,
            "unit": "ns",
            "range": "± 555.840781782022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14890.03488372093,
            "unit": "ns",
            "range": "± 1219.7772356668913"
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
          "id": "b8c0e711e2feb42e0acde7dffcc6b269f962493e",
          "message": "Cleanup",
          "timestamp": "2023-03-28T09:07:31+09:00",
          "tree_id": "1e8c807b6f2c966f7069feb76d4545506195a22b",
          "url": "https://github.com/greymistcube/libplanet/commit/b8c0e711e2feb42e0acde7dffcc6b269f962493e"
        },
        "date": 1679962705692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109770.36363636363,
            "unit": "ns",
            "range": "± 2669.003604797911"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5161311.578385416,
            "unit": "ns",
            "range": "± 49378.825301094934"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6326414.3125,
            "unit": "ns",
            "range": "± 121463.43781057121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27025471.03448276,
            "unit": "ns",
            "range": "± 789444.772618999"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6635404.461538462,
            "unit": "ns",
            "range": "± 99978.83196841834"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30089610.916666668,
            "unit": "ns",
            "range": "± 758171.4120874569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988055.55078125,
            "unit": "ns",
            "range": "± 20495.409362264174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846726.8264723558,
            "unit": "ns",
            "range": "± 4869.9030416983105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351953.4451822916,
            "unit": "ns",
            "range": "± 5895.692480022231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657816.054129464,
            "unit": "ns",
            "range": "± 5490.31312420559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829416.4783203125,
            "unit": "ns",
            "range": "± 1487.877476848225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749671.0138020833,
            "unit": "ns",
            "range": "± 1593.167778630753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93921.93617021276,
            "unit": "ns",
            "range": "± 6428.460965346117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201224.39655172414,
            "unit": "ns",
            "range": "± 8751.861045073134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183225.72727272726,
            "unit": "ns",
            "range": "± 4446.500155893805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3952518.1333333333,
            "unit": "ns",
            "range": "± 55799.99673306016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9979520.6,
            "unit": "ns",
            "range": "± 107306.97079327406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19806.505154639177,
            "unit": "ns",
            "range": "± 1727.4105326790884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53271.420454545456,
            "unit": "ns",
            "range": "± 3984.754866980104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39246.692307692305,
            "unit": "ns",
            "range": "± 631.9457234888907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100073.34736842105,
            "unit": "ns",
            "range": "± 18877.45222608878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5504.308510638298,
            "unit": "ns",
            "range": "± 562.9822668877022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18864.434782608696,
            "unit": "ns",
            "range": "± 2097.094951941422"
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
          "id": "2f8a60c05e7b3fc510f23b380297522d9535e538",
          "message": "Fix concurrency problem",
          "timestamp": "2023-03-28T08:58:51+09:00",
          "tree_id": "8572d562fabed0e96ae33533976c9ed38c8f00f6",
          "url": "https://github.com/greymistcube/libplanet/commit/2f8a60c05e7b3fc510f23b380297522d9535e538"
        },
        "date": 1679962706719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118156.0425531915,
            "unit": "ns",
            "range": "± 16792.648367096994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5475119.6821875,
            "unit": "ns",
            "range": "± 407709.2672288603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6062744.084210526,
            "unit": "ns",
            "range": "± 458282.9779593971"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30453214.464646466,
            "unit": "ns",
            "range": "± 2558816.051016062"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7090230.939393939,
            "unit": "ns",
            "range": "± 780517.2344663875"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35076872.171717174,
            "unit": "ns",
            "range": "± 3113172.9426587424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6482562.261067708,
            "unit": "ns",
            "range": "± 82045.30526095531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2168459.5919041894,
            "unit": "ns",
            "range": "± 119428.60149457089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1578484.4014862804,
            "unit": "ns",
            "range": "± 56261.16662526824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2947511.44765625,
            "unit": "ns",
            "range": "± 65897.476689293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938712.8953710938,
            "unit": "ns",
            "range": "± 62444.633337138795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912449.3361944901,
            "unit": "ns",
            "range": "± 19959.5072785654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109758.206185567,
            "unit": "ns",
            "range": "± 24244.38195530141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218594.40206185568,
            "unit": "ns",
            "range": "± 44881.573801148195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219622.27956989247,
            "unit": "ns",
            "range": "± 36067.253199485174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278796.546391753,
            "unit": "ns",
            "range": "± 424423.1963619866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10420493.597938145,
            "unit": "ns",
            "range": "± 960708.9410057602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25071.81818181818,
            "unit": "ns",
            "range": "± 10529.282386698998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62179.2,
            "unit": "ns",
            "range": "± 16671.792435511114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56407.74193548387,
            "unit": "ns",
            "range": "± 12227.93196182877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134298.3673469388,
            "unit": "ns",
            "range": "± 34287.98271324922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4803.807692307692,
            "unit": "ns",
            "range": "± 666.3281056323862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27810.621052631577,
            "unit": "ns",
            "range": "± 9279.295353588363"
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
          "id": "3e7edb6447107f08b34c883d7696c6d9b0166b21",
          "message": "Higher depth",
          "timestamp": "2023-03-28T09:31:23+09:00",
          "tree_id": "1b9ace8cc9e53989f79a8993abbf9e304d431720",
          "url": "https://github.com/greymistcube/libplanet/commit/3e7edb6447107f08b34c883d7696c6d9b0166b21"
        },
        "date": 1679964120655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102052.625,
            "unit": "ns",
            "range": "± 3138.2078073217976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4431851.340401785,
            "unit": "ns",
            "range": "± 21130.690935020935"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6089596.714285715,
            "unit": "ns",
            "range": "± 75503.9725215003"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25356474.266666666,
            "unit": "ns",
            "range": "± 298098.12385197374"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6745870.357142857,
            "unit": "ns",
            "range": "± 56216.86156662518"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28499990.4,
            "unit": "ns",
            "range": "± 441041.523420706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950628.036458333,
            "unit": "ns",
            "range": "± 32901.876756772515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929908.8671875,
            "unit": "ns",
            "range": "± 32895.115569494956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337255.1048177083,
            "unit": "ns",
            "range": "± 621.5194617369478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573422.5888671875,
            "unit": "ns",
            "range": "± 1298.7744661027161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812053.3633510044,
            "unit": "ns",
            "range": "± 2872.5755975210986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739701.7000450721,
            "unit": "ns",
            "range": "± 708.8061121987932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93271.88421052632,
            "unit": "ns",
            "range": "± 7224.952752349611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196194.59210526315,
            "unit": "ns",
            "range": "± 9372.072384380637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168874.85714285713,
            "unit": "ns",
            "range": "± 3980.913001884295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3794524.933333333,
            "unit": "ns",
            "range": "± 29211.482792282375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9441636.733333332,
            "unit": "ns",
            "range": "± 48713.10041085555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16491.22988505747,
            "unit": "ns",
            "range": "± 1111.0299087631554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49905.054945054944,
            "unit": "ns",
            "range": "± 3959.3648687149516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44662.50515463918,
            "unit": "ns",
            "range": "± 2804.657339898046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94560.69072164949,
            "unit": "ns",
            "range": "± 15591.221681045947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5002.556701030928,
            "unit": "ns",
            "range": "± 545.8066272551755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15553.095744680852,
            "unit": "ns",
            "range": "± 1384.2952018222663"
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
          "id": "eeae46d1711f813b88ccbfdc00135da9bfa71472",
          "message": "Lower depth limit",
          "timestamp": "2023-03-28T09:56:48+09:00",
          "tree_id": "67520f504c2bbeb5e69672bba5c71fc989ad1a4f",
          "url": "https://github.com/greymistcube/libplanet/commit/eeae46d1711f813b88ccbfdc00135da9bfa71472"
        },
        "date": 1679965689216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103587.4923076923,
            "unit": "ns",
            "range": "± 4646.890163469129"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4496497.21015625,
            "unit": "ns",
            "range": "± 64729.25293036271"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6107509,
            "unit": "ns",
            "range": "± 61839.99691014023"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25951863.583333332,
            "unit": "ns",
            "range": "± 210130.9627790416"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6437386.8,
            "unit": "ns",
            "range": "± 255663.26572510277"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28382279.066666666,
            "unit": "ns",
            "range": "± 355572.741295237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6100676.150520833,
            "unit": "ns",
            "range": "± 30443.84107469364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827927.8311197916,
            "unit": "ns",
            "range": "± 1205.3020293170323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338318.3485576923,
            "unit": "ns",
            "range": "± 1997.575413408379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543345.4453125,
            "unit": "ns",
            "range": "± 2086.4568377224123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809168.9189453125,
            "unit": "ns",
            "range": "± 610.018200123374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736287.3171735491,
            "unit": "ns",
            "range": "± 667.9790684488278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91960.84210526316,
            "unit": "ns",
            "range": "± 7675.061267086239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198992.94444444444,
            "unit": "ns",
            "range": "± 14795.138495018104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170446.94736842104,
            "unit": "ns",
            "range": "± 2867.3868373231057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773998.4,
            "unit": "ns",
            "range": "± 31633.121418628834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9486809.6,
            "unit": "ns",
            "range": "± 57468.23642152246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17519.510869565216,
            "unit": "ns",
            "range": "± 1790.6128332394674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48325.46666666667,
            "unit": "ns",
            "range": "± 3611.9704827890455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42773.28571428572,
            "unit": "ns",
            "range": "± 4381.4763317129555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87741.92631578947,
            "unit": "ns",
            "range": "± 11296.229659306218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4987.223404255319,
            "unit": "ns",
            "range": "± 776.7042053910596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15584.771739130434,
            "unit": "ns",
            "range": "± 1381.6241684802746"
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
          "id": "a995698cfccba9b723e04e181f79b340b6e24fe9",
          "message": "Reduce cache depth",
          "timestamp": "2023-03-28T10:41:31+09:00",
          "tree_id": "31e72eed8e972748a282d9a2807e6ee719fcda1d",
          "url": "https://github.com/greymistcube/libplanet/commit/a995698cfccba9b723e04e181f79b340b6e24fe9"
        },
        "date": 1679968434191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103653.4947368421,
            "unit": "ns",
            "range": "± 6141.372696153289"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4503027.951041667,
            "unit": "ns",
            "range": "± 48137.149544717235"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5608792.92,
            "unit": "ns",
            "range": "± 226379.56135657092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25926636.933333334,
            "unit": "ns",
            "range": "± 369022.39674664475"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6901345.615384615,
            "unit": "ns",
            "range": "± 77151.36786272647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28851075.666666668,
            "unit": "ns",
            "range": "± 498219.9630922738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6305930.022916666,
            "unit": "ns",
            "range": "± 29603.068784227926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834533.4451822916,
            "unit": "ns",
            "range": "± 4077.9924964303536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352788.2859933036,
            "unit": "ns",
            "range": "± 870.7200580677222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613389.1492745536,
            "unit": "ns",
            "range": "± 4329.56942854668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793454.7287248884,
            "unit": "ns",
            "range": "± 629.8025226394494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722835.6188151041,
            "unit": "ns",
            "range": "± 489.20060849602334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85720.01086956522,
            "unit": "ns",
            "range": "± 4629.411491552929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199720.39583333334,
            "unit": "ns",
            "range": "± 14960.051259044725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171841.57142857142,
            "unit": "ns",
            "range": "± 858.8646991398421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3738697.5,
            "unit": "ns",
            "range": "± 18192.1456653439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9588802.733333332,
            "unit": "ns",
            "range": "± 69936.90761727077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17808.134020618556,
            "unit": "ns",
            "range": "± 2330.571713786421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51528.51612903226,
            "unit": "ns",
            "range": "± 4222.958510161019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39067.52,
            "unit": "ns",
            "range": "± 1588.765895599603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85123.02150537634,
            "unit": "ns",
            "range": "± 12390.38835495034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4996.802083333333,
            "unit": "ns",
            "range": "± 752.6222596228631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16436.270833333332,
            "unit": "ns",
            "range": "± 1289.6336605830245"
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
          "id": "c13cbaa676499355fa1d193bc2969658550b5563",
          "message": "Revert back to simpler cache scheme",
          "timestamp": "2023-03-28T14:11:32+09:00",
          "tree_id": "e17e318e77b111ba38c7f4bd23bddec96fb8cd7d",
          "url": "https://github.com/greymistcube/libplanet/commit/c13cbaa676499355fa1d193bc2969658550b5563"
        },
        "date": 1679981298945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134817.27659574468,
            "unit": "ns",
            "range": "± 11581.576501787578"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6121880.455125762,
            "unit": "ns",
            "range": "± 321580.7293220516"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7559365.585106383,
            "unit": "ns",
            "range": "± 600310.7739725972"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36575433.229166664,
            "unit": "ns",
            "range": "± 2264701.808569389"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8553096.242105262,
            "unit": "ns",
            "range": "± 669420.1722464464"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38961725.10666667,
            "unit": "ns",
            "range": "± 1963978.919072581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7101834.305208334,
            "unit": "ns",
            "range": "± 33824.53720296088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242452.3958333335,
            "unit": "ns",
            "range": "± 2706.7434417052295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1632083.1963541666,
            "unit": "ns",
            "range": "± 3875.5298117024863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3175998.6233258927,
            "unit": "ns",
            "range": "± 5890.068783107474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990874.7759114583,
            "unit": "ns",
            "range": "± 2140.712691399587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930471.7727213542,
            "unit": "ns",
            "range": "± 1021.3410566789147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122913.68131868132,
            "unit": "ns",
            "range": "± 10559.388139764667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248970.4090909091,
            "unit": "ns",
            "range": "± 11536.797762580627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227045.925,
            "unit": "ns",
            "range": "± 7942.859177733651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4855239.928571428,
            "unit": "ns",
            "range": "± 30054.171384516492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12078902.4,
            "unit": "ns",
            "range": "± 100072.85659943674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25815.9793814433,
            "unit": "ns",
            "range": "± 2201.6809107824365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71573.77173913043,
            "unit": "ns",
            "range": "± 5409.033201792501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54683.225,
            "unit": "ns",
            "range": "± 2880.321131775397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118503.51685393258,
            "unit": "ns",
            "range": "± 14617.36132847167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8122.18556701031,
            "unit": "ns",
            "range": "± 1201.413701383854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25032.747311827956,
            "unit": "ns",
            "range": "± 2618.6030529733994"
          }
        ]
      }
    ]
  }
}