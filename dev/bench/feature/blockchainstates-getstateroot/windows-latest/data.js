window.BENCHMARK_DATA = {
  "lastUpdate": 1686749530951,
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
        "date": 1686721667595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409924.2424242424,
            "unit": "ns",
            "range": "± 41598.34003826828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631909.782608696,
            "unit": "ns",
            "range": "± 148265.72748685032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248068,
            "unit": "ns",
            "range": "± 149215.16758823092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5580678.409090909,
            "unit": "ns",
            "range": "± 297664.6915724708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48816.30434782609,
            "unit": "ns",
            "range": "± 3270.624404340339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6878242.857142857,
            "unit": "ns",
            "range": "± 58679.6349719352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19937238.095238097,
            "unit": "ns",
            "range": "± 469099.25013390335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49455094.11764706,
            "unit": "ns",
            "range": "± 974518.4807576691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97960564.70588236,
            "unit": "ns",
            "range": "± 1998005.644993645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195224720,
            "unit": "ns",
            "range": "± 3478466.417053847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779487.053571428,
            "unit": "ns",
            "range": "± 16006.37039561009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513643.6197916667,
            "unit": "ns",
            "range": "± 5999.11886224109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172126.6145833333,
            "unit": "ns",
            "range": "± 6383.974901594346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604434.7916666665,
            "unit": "ns",
            "range": "± 9051.85104440145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835934.2252604166,
            "unit": "ns",
            "range": "± 2976.703437496083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766628.8606770834,
            "unit": "ns",
            "range": "± 2287.0803465540457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088646.4285714286,
            "unit": "ns",
            "range": "± 86982.64399949485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461458.536585366,
            "unit": "ns",
            "range": "± 122009.95241292768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4018479.1666666665,
            "unit": "ns",
            "range": "± 102253.40636046724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372973.333333333,
            "unit": "ns",
            "range": "± 81480.35229135801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691177.358490566,
            "unit": "ns",
            "range": "± 276326.3306599014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269216.39344262297,
            "unit": "ns",
            "range": "± 12097.57799903034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258015.55555555556,
            "unit": "ns",
            "range": "± 9444.838791529466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231774.74747474748,
            "unit": "ns",
            "range": "± 17172.963702679262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066693.3333333335,
            "unit": "ns",
            "range": "± 52444.39867498676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741300,
            "unit": "ns",
            "range": "± 64088.49650768369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21642.85714285714,
            "unit": "ns",
            "range": "± 2544.450196825183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89927.36842105263,
            "unit": "ns",
            "range": "± 6645.242132617879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76369.14893617021,
            "unit": "ns",
            "range": "± 6313.6015759073625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101003.1914893617,
            "unit": "ns",
            "range": "± 11168.450688441162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.367346938776,
            "unit": "ns",
            "range": "± 1105.2449407841552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20534.40860215054,
            "unit": "ns",
            "range": "± 2099.55971697463"
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
          "id": "e2928b2445fa84b3d769723bfc817cc6cc7384ab",
          "message": "Updated docs",
          "timestamp": "2023-06-14T16:31:23+09:00",
          "tree_id": "61d2ef63d57595effb4779f78ec4028df3258dd0",
          "url": "https://github.com/greymistcube/libplanet/commit/e2928b2445fa84b3d769723bfc817cc6cc7384ab"
        },
        "date": 1686728843680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407539.393939394,
            "unit": "ns",
            "range": "± 134531.42172846463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2485809.090909091,
            "unit": "ns",
            "range": "± 76993.63351779632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181268.75,
            "unit": "ns",
            "range": "± 137497.06776777765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5133100,
            "unit": "ns",
            "range": "± 170320.6457859774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43592.55319148936,
            "unit": "ns",
            "range": "± 2410.24869825975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6952386.666666667,
            "unit": "ns",
            "range": "± 58426.19112627324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17451786.666666668,
            "unit": "ns",
            "range": "± 85887.63312497047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45421800,
            "unit": "ns",
            "range": "± 172570.14308887353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90260476.66666667,
            "unit": "ns",
            "range": "± 513915.00195858773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182675813.33333334,
            "unit": "ns",
            "range": "± 454547.07577459794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831872.1875,
            "unit": "ns",
            "range": "± 11908.064311960386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507757.2866586538,
            "unit": "ns",
            "range": "± 1292.6068361907135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161741.1848958333,
            "unit": "ns",
            "range": "± 2688.931765836875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615697.4088541665,
            "unit": "ns",
            "range": "± 12287.346147925713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814920.1041666666,
            "unit": "ns",
            "range": "± 3896.0915784540093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716602.4544270834,
            "unit": "ns",
            "range": "± 908.7104926601331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2979650,
            "unit": "ns",
            "range": "± 34506.718713369955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3141650,
            "unit": "ns",
            "range": "± 74862.18926101735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4030250,
            "unit": "ns",
            "range": "± 86139.54649630003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4038950,
            "unit": "ns",
            "range": "± 74822.16249213865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6451774.074074074,
            "unit": "ns",
            "range": "± 179137.52257498147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257236.58536585365,
            "unit": "ns",
            "range": "± 8486.599910964373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246496.55172413794,
            "unit": "ns",
            "range": "± 5904.08349961646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226401.0989010989,
            "unit": "ns",
            "range": "± 12709.87800016187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872013.3333333335,
            "unit": "ns",
            "range": "± 22621.09845339291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3423946.6666666665,
            "unit": "ns",
            "range": "± 30568.608236617667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18465.9793814433,
            "unit": "ns",
            "range": "± 1670.135136619324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87300,
            "unit": "ns",
            "range": "± 6434.459421057616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69423.86363636363,
            "unit": "ns",
            "range": "± 3692.3964843016483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90265.30612244898,
            "unit": "ns",
            "range": "± 15115.391909763217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4661.458333333333,
            "unit": "ns",
            "range": "± 765.4197048426461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17559.340659340658,
            "unit": "ns",
            "range": "± 1398.3305937182556"
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
          "id": "a894ffe815da3c7eb734c3879241b1f19626e981",
          "message": "Changelog",
          "timestamp": "2023-06-14T16:37:23+09:00",
          "tree_id": "521d792b5cb0fe4cfaf18f2e7292161d4310f523",
          "url": "https://github.com/greymistcube/libplanet/commit/a894ffe815da3c7eb734c3879241b1f19626e981"
        },
        "date": 1686729515630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1858154.7368421052,
            "unit": "ns",
            "range": "± 175136.0812968147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3694820,
            "unit": "ns",
            "range": "± 366083.79380940594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2996523.711340206,
            "unit": "ns",
            "range": "± 324709.8874294034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7687725.252525252,
            "unit": "ns",
            "range": "± 803788.9676773901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65643.68421052632,
            "unit": "ns",
            "range": "± 11787.478124582629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10306536.170212766,
            "unit": "ns",
            "range": "± 741330.1919633098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26560238.636363637,
            "unit": "ns",
            "range": "± 944684.8162010905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69525700,
            "unit": "ns",
            "range": "± 3171288.145116246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141058540,
            "unit": "ns",
            "range": "± 3721303.584543101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280746617.64705884,
            "unit": "ns",
            "range": "± 5692474.276537762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6600531.875,
            "unit": "ns",
            "range": "± 122724.20185024175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2097814.425223214,
            "unit": "ns",
            "range": "± 35856.945702035126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1620550.8713942308,
            "unit": "ns",
            "range": "± 22858.925156684305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3527659.4618055555,
            "unit": "ns",
            "range": "± 72570.93359482191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1127170.7682291667,
            "unit": "ns",
            "range": "± 19718.659129078398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1063174.925595238,
            "unit": "ns",
            "range": "± 24124.012901033584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4161857.3033707864,
            "unit": "ns",
            "range": "± 289131.7303141662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4319203.296703297,
            "unit": "ns",
            "range": "± 306456.46254150925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5795453.260869565,
            "unit": "ns",
            "range": "± 330046.1201375064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5556022.916666667,
            "unit": "ns",
            "range": "± 392017.1998050373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9364242.553191489,
            "unit": "ns",
            "range": "± 610576.3683689497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354887.77777777775,
            "unit": "ns",
            "range": "± 39432.92364149981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333482.60869565216,
            "unit": "ns",
            "range": "± 38370.09655452329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307900,
            "unit": "ns",
            "range": "± 35777.27607219515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5317473.195876288,
            "unit": "ns",
            "range": "± 479157.38965993386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4851312.359550562,
            "unit": "ns",
            "range": "± 361472.9622795348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23910.526315789473,
            "unit": "ns",
            "range": "± 5339.38544722961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110019.58762886598,
            "unit": "ns",
            "range": "± 18298.87086211001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118747.36842105263,
            "unit": "ns",
            "range": "± 24538.32799669652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142246.73913043478,
            "unit": "ns",
            "range": "± 29672.207187194053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7807.692307692308,
            "unit": "ns",
            "range": "± 1962.834162306624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22070.454545454544,
            "unit": "ns",
            "range": "± 4489.890536794064"
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
          "distinct": false,
          "id": "c34c30e0385e5d45d261d298fd0002009d576469",
          "message": "Cleanup",
          "timestamp": "2023-06-14T16:49:10+09:00",
          "tree_id": "9a2df2be4a4edfd3c1ae444e1c4e8a43d6a67add",
          "url": "https://github.com/greymistcube/libplanet/commit/c34c30e0385e5d45d261d298fd0002009d576469"
        },
        "date": 1686749504578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796891.7525773195,
            "unit": "ns",
            "range": "± 161514.01814168168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3442448.936170213,
            "unit": "ns",
            "range": "± 248997.19629404857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2832882.1052631577,
            "unit": "ns",
            "range": "± 233308.0795761705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7178768.085106383,
            "unit": "ns",
            "range": "± 448197.34953676106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64483.15789473684,
            "unit": "ns",
            "range": "± 12302.297421071651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9222038.043478262,
            "unit": "ns",
            "range": "± 645766.3131304946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26444136.70886076,
            "unit": "ns",
            "range": "± 1341168.0397380001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66524486.20689655,
            "unit": "ns",
            "range": "± 1855587.655612124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131506548.8372093,
            "unit": "ns",
            "range": "± 4772692.173554725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269513568.42105263,
            "unit": "ns",
            "range": "± 5987799.284568639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6111248.958333333,
            "unit": "ns",
            "range": "± 112398.16989375226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986458.8169642857,
            "unit": "ns",
            "range": "± 34636.205616309155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471529.53125,
            "unit": "ns",
            "range": "± 19207.83481500362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3308122.2916666665,
            "unit": "ns",
            "range": "± 47136.14690593434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1098232.950367647,
            "unit": "ns",
            "range": "± 20044.804574847425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 997271.171875,
            "unit": "ns",
            "range": "± 17842.649546299865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3952842.1052631577,
            "unit": "ns",
            "range": "± 361279.75533171237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4407798.666666667,
            "unit": "ns",
            "range": "± 215618.33616390347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5539574.444444444,
            "unit": "ns",
            "range": "± 209015.53786909496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5412957.303370787,
            "unit": "ns",
            "range": "± 365353.1967610995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8886901.666666666,
            "unit": "ns",
            "range": "± 383210.46414168226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353410.5263157895,
            "unit": "ns",
            "range": "± 41790.56565039075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335877.6595744681,
            "unit": "ns",
            "range": "± 39335.190827988394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279893.6842105263,
            "unit": "ns",
            "range": "± 35433.4642000802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5094204.255319149,
            "unit": "ns",
            "range": "± 334835.1703835539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4668027.659574468,
            "unit": "ns",
            "range": "± 279429.22985174396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26319.354838709678,
            "unit": "ns",
            "range": "± 7734.876661624734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108470.21276595745,
            "unit": "ns",
            "range": "± 20166.126340156337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118387.5,
            "unit": "ns",
            "range": "± 26693.031812973608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130603.2258064516,
            "unit": "ns",
            "range": "± 26875.40677796461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8427.173913043478,
            "unit": "ns",
            "range": "± 2011.0739168643734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24667.415730337078,
            "unit": "ns",
            "range": "± 6909.295044965595"
          }
        ]
      }
    ]
  }
}