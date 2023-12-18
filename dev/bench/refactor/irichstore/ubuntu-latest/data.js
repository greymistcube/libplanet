window.BENCHMARK_DATA = {
  "lastUpdate": 1702901978281,
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
          "id": "20a83c7e16aa91de2331c52fadddcf7473abc4e5",
          "message": "Removed updated addresses from IRichStore",
          "timestamp": "2023-12-18T18:50:02+09:00",
          "tree_id": "4c182bfa4a5a7e0262c2321d7e3df1f7ed1be87e",
          "url": "https://github.com/greymistcube/libplanet/commit/20a83c7e16aa91de2331c52fadddcf7473abc4e5"
        },
        "date": 1702893664876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752081.434151786,
            "unit": "ns",
            "range": "± 33958.244712213964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203689.7991536458,
            "unit": "ns",
            "range": "± 2841.788524411353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781649.1837565104,
            "unit": "ns",
            "range": "± 842.8369158797316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953906.4827473958,
            "unit": "ns",
            "range": "± 3364.258733425791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625208.9182477678,
            "unit": "ns",
            "range": "± 764.4840063678598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583925.6709798177,
            "unit": "ns",
            "range": "± 1255.9732970292807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435398.714285714,
            "unit": "ns",
            "range": "± 20498.98363494966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529053.3333333335,
            "unit": "ns",
            "range": "± 35737.314627844156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121707.09375,
            "unit": "ns",
            "range": "± 96821.9961298649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2928197.6525423727,
            "unit": "ns",
            "range": "± 128601.93974603125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6972398.464285715,
            "unit": "ns",
            "range": "± 198359.06334734423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41756.44680851064,
            "unit": "ns",
            "range": "± 5402.993759172444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203559.41666666666,
            "unit": "ns",
            "range": "± 8994.914439426251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202069.97826086957,
            "unit": "ns",
            "range": "± 11485.703976452078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164947.17647058822,
            "unit": "ns",
            "range": "± 3314.831749789386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113579,
            "unit": "ns",
            "range": "± 35568.74819708577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2900591.4166666665,
            "unit": "ns",
            "range": "± 37861.962914245436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15271.630434782608,
            "unit": "ns",
            "range": "± 2558.8544557393157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64088.32258064516,
            "unit": "ns",
            "range": "± 5427.179868918412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88571.82978723405,
            "unit": "ns",
            "range": "± 11248.797174062178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93045.2258064516,
            "unit": "ns",
            "range": "± 6636.438704359296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6439.232323232323,
            "unit": "ns",
            "range": "± 1564.230121832011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15903.454545454546,
            "unit": "ns",
            "range": "± 5518.393354015959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5565284.733333333,
            "unit": "ns",
            "range": "± 19575.15427951123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14196016.357142856,
            "unit": "ns",
            "range": "± 94780.33063523346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36465075,
            "unit": "ns",
            "range": "± 285720.88557691604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74288754.53846154,
            "unit": "ns",
            "range": "± 417065.630306873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149476472.07692307,
            "unit": "ns",
            "range": "± 702584.6673931266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965155.5483870967,
            "unit": "ns",
            "range": "± 86980.33317946777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900168.021978022,
            "unit": "ns",
            "range": "± 102501.24631935816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404182.4086021506,
            "unit": "ns",
            "range": "± 96621.16587052269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5931177.79245283,
            "unit": "ns",
            "range": "± 246820.3422559817"
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
          "id": "17212c88836ceabcca159fcfb0030f387d8f33a7",
          "message": "Removed unnecessary arguments",
          "timestamp": "2023-12-18T18:53:58+09:00",
          "tree_id": "b579df8e713644622da9eabfc1fc07917f64f9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/17212c88836ceabcca159fcfb0030f387d8f33a7"
        },
        "date": 1702893903065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753746.1827566964,
            "unit": "ns",
            "range": "± 37499.15802358855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193260.7864118305,
            "unit": "ns",
            "range": "± 1562.2424741419975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765903.84765625,
            "unit": "ns",
            "range": "± 7472.428864676827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964022.6729910714,
            "unit": "ns",
            "range": "± 4003.464252683074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614433.1584123884,
            "unit": "ns",
            "range": "± 777.1147405785819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579058.6258463542,
            "unit": "ns",
            "range": "± 10290.314675008327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2531403.769230769,
            "unit": "ns",
            "range": "± 69257.95573552987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2616458,
            "unit": "ns",
            "range": "± 55460.08649682485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3205742.8518518517,
            "unit": "ns",
            "range": "± 87340.34149750209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3072219.5512820515,
            "unit": "ns",
            "range": "± 106177.72286297029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7025890.892857143,
            "unit": "ns",
            "range": "± 196152.99820903965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40001.21649484536,
            "unit": "ns",
            "range": "± 5160.135100433426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203809.3440860215,
            "unit": "ns",
            "range": "± 13444.469646511538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189722.4193548387,
            "unit": "ns",
            "range": "± 8638.987316465136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168132.78125,
            "unit": "ns",
            "range": "± 4896.808158806431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110326.3,
            "unit": "ns",
            "range": "± 38149.98286687501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2953219.6923076925,
            "unit": "ns",
            "range": "± 35606.994309134956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12932.90909090909,
            "unit": "ns",
            "range": "± 1199.518951821302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68849.20652173914,
            "unit": "ns",
            "range": "± 5878.54220461039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57880.86516853933,
            "unit": "ns",
            "range": "± 6176.7312740327225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65370.742105263154,
            "unit": "ns",
            "range": "± 11627.077624195144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4297.5,
            "unit": "ns",
            "range": "± 1704.5645088844406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12922.98947368421,
            "unit": "ns",
            "range": "± 2092.1774694604196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5524253.785714285,
            "unit": "ns",
            "range": "± 24644.227225984057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14440777.266666668,
            "unit": "ns",
            "range": "± 115765.17528382721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36533752.71428572,
            "unit": "ns",
            "range": "± 131616.6429172113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75540543.28571428,
            "unit": "ns",
            "range": "± 361985.62063502945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149731025.14285713,
            "unit": "ns",
            "range": "± 1065645.6916627234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985019.1413043478,
            "unit": "ns",
            "range": "± 85754.58479840508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950167.0294117648,
            "unit": "ns",
            "range": "± 91434.92140624548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1485870.03125,
            "unit": "ns",
            "range": "± 118958.7721241849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6192387.911392405,
            "unit": "ns",
            "range": "± 318407.91178234655"
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
          "id": "35a35f847e003ae3e4102cc9a81797f633097d07",
          "message": "Changelog",
          "timestamp": "2023-12-18T18:56:37+09:00",
          "tree_id": "9fc809af09fa515759b8076fcff9f46aa92a3c88",
          "url": "https://github.com/greymistcube/libplanet/commit/35a35f847e003ae3e4102cc9a81797f633097d07"
        },
        "date": 1702894064137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741366.152604167,
            "unit": "ns",
            "range": "± 50226.491277785964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1178636.7052283655,
            "unit": "ns",
            "range": "± 3203.814331698166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773790.0876116072,
            "unit": "ns",
            "range": "± 2645.177287922145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917326.05234375,
            "unit": "ns",
            "range": "± 22311.603194676896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620146.7389573317,
            "unit": "ns",
            "range": "± 984.225100122485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573723.5229492188,
            "unit": "ns",
            "range": "± 1039.5999009419136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418447.4615384615,
            "unit": "ns",
            "range": "± 37907.090554000984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514513.1904761903,
            "unit": "ns",
            "range": "± 59048.93485797949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3107639.7333333334,
            "unit": "ns",
            "range": "± 56424.81471134419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2914666.5344827585,
            "unit": "ns",
            "range": "± 127458.98549894331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6840424.84375,
            "unit": "ns",
            "range": "± 208971.68225215917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43196.96842105263,
            "unit": "ns",
            "range": "± 4633.794921156157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203741.8620689655,
            "unit": "ns",
            "range": "± 8869.797738349942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200989.76666666666,
            "unit": "ns",
            "range": "± 13529.488952081463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164584.75714285715,
            "unit": "ns",
            "range": "± 4709.1011090718985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074385.411764706,
            "unit": "ns",
            "range": "± 62842.0458939105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2734757.0625,
            "unit": "ns",
            "range": "± 52953.871282426866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14498.173469387755,
            "unit": "ns",
            "range": "± 2153.7105886109803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68850.97802197802,
            "unit": "ns",
            "range": "± 4143.322703064995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52915.02247191011,
            "unit": "ns",
            "range": "± 3806.2201692442854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61963.28125,
            "unit": "ns",
            "range": "± 11924.773425368785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2957.9166666666665,
            "unit": "ns",
            "range": "± 678.8103473867338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14977.865979381444,
            "unit": "ns",
            "range": "± 1824.506015501559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5523494.5,
            "unit": "ns",
            "range": "± 27847.15652035645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14592505.733333332,
            "unit": "ns",
            "range": "± 70029.82448058078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36195170.2,
            "unit": "ns",
            "range": "± 186365.52623586648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75552879.5,
            "unit": "ns",
            "range": "± 686488.5984978192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150270817.64285713,
            "unit": "ns",
            "range": "± 992714.2328888478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964831.5053763441,
            "unit": "ns",
            "range": "± 76126.79158234801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839884.78,
            "unit": "ns",
            "range": "± 49089.84130017805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1409707.85,
            "unit": "ns",
            "range": "± 117258.92789075118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6051440.159574468,
            "unit": "ns",
            "range": "± 387578.241389235"
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
          "id": "17ff83dcd857a9b2146fbd62d34d39ed2f9cf18d",
          "message": "Fixed tests",
          "timestamp": "2023-12-18T21:08:50+09:00",
          "tree_id": "36bf7b00a2e4e18bcec64a1ecbbbb17332996df9",
          "url": "https://github.com/greymistcube/libplanet/commit/17ff83dcd857a9b2146fbd62d34d39ed2f9cf18d"
        },
        "date": 1702901971101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707888.259375,
            "unit": "ns",
            "range": "± 44768.31341897505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228853.3831380208,
            "unit": "ns",
            "range": "± 2870.770576837265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779551.2084960938,
            "unit": "ns",
            "range": "± 1429.8273258634567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942740.2740885417,
            "unit": "ns",
            "range": "± 2561.105449833874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617494.7257361779,
            "unit": "ns",
            "range": "± 2776.686066215859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573642.5646784856,
            "unit": "ns",
            "range": "± 3288.8154811225713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385130.125,
            "unit": "ns",
            "range": "± 72304.79402557375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558424.566666667,
            "unit": "ns",
            "range": "± 28876.669026511117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057684.5263157897,
            "unit": "ns",
            "range": "± 43690.42051292813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894362.76119403,
            "unit": "ns",
            "range": "± 132189.95955053624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6782033.818181818,
            "unit": "ns",
            "range": "± 162657.2731501178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40468.13265306123,
            "unit": "ns",
            "range": "± 5911.176082045215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204063.4375,
            "unit": "ns",
            "range": "± 8008.958252724444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190892.06818181818,
            "unit": "ns",
            "range": "± 10265.346477062933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164148.2162162162,
            "unit": "ns",
            "range": "± 4846.2762287436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024994.785714286,
            "unit": "ns",
            "range": "± 44395.3122476454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2852141.8076923075,
            "unit": "ns",
            "range": "± 24587.458704878438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12449.6125,
            "unit": "ns",
            "range": "± 1262.5858686802808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64229.916666666664,
            "unit": "ns",
            "range": "± 7188.631647358453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52393.606060606064,
            "unit": "ns",
            "range": "± 1358.9366693161683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58152.67021276596,
            "unit": "ns",
            "range": "± 10952.778300640168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.7640449438204,
            "unit": "ns",
            "range": "± 390.50081545927867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15062.106382978724,
            "unit": "ns",
            "range": "± 2458.822891154697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5657317.857142857,
            "unit": "ns",
            "range": "± 19858.24516070434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14421215.333333334,
            "unit": "ns",
            "range": "± 168935.00460940873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36750373.5,
            "unit": "ns",
            "range": "± 315686.03693125804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74370746.7,
            "unit": "ns",
            "range": "± 917546.578256011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151986484.65384614,
            "unit": "ns",
            "range": "± 685283.5216553129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927502.9555555555,
            "unit": "ns",
            "range": "± 50586.92316744086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867134.5625,
            "unit": "ns",
            "range": "± 86082.84478188475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1383698.3645833333,
            "unit": "ns",
            "range": "± 98361.6738175061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5737715.548387097,
            "unit": "ns",
            "range": "± 174450.70203677192"
          }
        ]
      }
    ]
  }
}