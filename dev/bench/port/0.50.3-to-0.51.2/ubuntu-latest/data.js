window.BENCHMARK_DATA = {
  "lastUpdate": 1678842758096,
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
          "id": "17498ea0633120215dc070704dc36a44751c9944",
          "message": "Port 0.50.3 to 0.51.3",
          "timestamp": "2023-03-14T19:16:05+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/17498ea0633120215dc070704dc36a44751c9944"
        },
        "date": 1678789750379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192236.2894736842,
            "unit": "ns",
            "range": "± 6514.978537675523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189372.80357142858,
            "unit": "ns",
            "range": "± 8130.06966630029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163589.7741935484,
            "unit": "ns",
            "range": "± 4999.980584693488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11246635.266666668,
            "unit": "ns",
            "range": "± 75125.86016761346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8984971.5,
            "unit": "ns",
            "range": "± 66874.14817142604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17439.926315789475,
            "unit": "ns",
            "range": "± 1431.3762403090914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49906.234042553195,
            "unit": "ns",
            "range": "± 5981.85712239996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38031.25,
            "unit": "ns",
            "range": "± 726.3780007681951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79168.0731707317,
            "unit": "ns",
            "range": "± 6132.991167550024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4629.886597938144,
            "unit": "ns",
            "range": "± 472.62299713691505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16958.032258064515,
            "unit": "ns",
            "range": "± 1336.4928264061366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292925.533333333,
            "unit": "ns",
            "range": "± 44515.228642834234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5067152.142857143,
            "unit": "ns",
            "range": "± 56782.823514560405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23632593.57142857,
            "unit": "ns",
            "range": "± 325396.9503910603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6098978.955555555,
            "unit": "ns",
            "range": "± 231550.9927916876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26540764.733333334,
            "unit": "ns",
            "range": "± 327041.1619622797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5922254.5078125,
            "unit": "ns",
            "range": "± 18196.14936690661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924054.664341518,
            "unit": "ns",
            "range": "± 3672.482009922324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369257.7889229911,
            "unit": "ns",
            "range": "± 3686.1081646702355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559215.925480769,
            "unit": "ns",
            "range": "± 1648.3367890896484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814461.7664620535,
            "unit": "ns",
            "range": "± 756.2945692451553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744892.1028395433,
            "unit": "ns",
            "range": "± 1927.860129640356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7769508.571428572,
            "unit": "ns",
            "range": "± 23810.968014807753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19753175.8,
            "unit": "ns",
            "range": "± 150209.4940956035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50201604.06666667,
            "unit": "ns",
            "range": "± 597621.4704640707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101002936.73333333,
            "unit": "ns",
            "range": "± 1206966.9184554236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200545652.73333332,
            "unit": "ns",
            "range": "± 2860945.104649048"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45535.98611111111,
            "unit": "ns",
            "range": "± 2173.035032696323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345606.9333333333,
            "unit": "ns",
            "range": "± 74706.78926471609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471922.65,
            "unit": "ns",
            "range": "± 55050.38688355376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080168.9318181819,
            "unit": "ns",
            "range": "± 104455.1181689842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101918.863636363,
            "unit": "ns",
            "range": "± 190536.90437673577"
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
          "id": "c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39",
          "message": "Port 0.50.3 to 0.51.2",
          "timestamp": "2023-03-14T19:16:46+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39"
        },
        "date": 1678789768688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197770.5294117647,
            "unit": "ns",
            "range": "± 2853.6581373223185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195764.2857142857,
            "unit": "ns",
            "range": "± 5596.904851374902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163392.64285714287,
            "unit": "ns",
            "range": "± 2690.9713032555837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11416726.846153846,
            "unit": "ns",
            "range": "± 68950.22155614168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9288430.2,
            "unit": "ns",
            "range": "± 66676.79938565052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18666.326530612245,
            "unit": "ns",
            "range": "± 1696.2021785220334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51964.89361702128,
            "unit": "ns",
            "range": "± 3960.1430257327693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39216.583333333336,
            "unit": "ns",
            "range": "± 587.5450401819628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86918.70833333333,
            "unit": "ns",
            "range": "± 11879.55865024292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4584.693877551021,
            "unit": "ns",
            "range": "± 516.8006337202728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17642.094736842104,
            "unit": "ns",
            "range": "± 1834.1577699238426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3340191.1428571427,
            "unit": "ns",
            "range": "± 44009.104954555696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5308550.4,
            "unit": "ns",
            "range": "± 88195.8438555922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23729917,
            "unit": "ns",
            "range": "± 190272.2908150317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6267252.689655173,
            "unit": "ns",
            "range": "± 177034.450912427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27339095.6,
            "unit": "ns",
            "range": "± 370085.7461403467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5964838.173958333,
            "unit": "ns",
            "range": "± 30757.772750560198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880125.2202845982,
            "unit": "ns",
            "range": "± 3508.6591424807457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367180.1373697917,
            "unit": "ns",
            "range": "± 778.9270045467858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563646.8359375,
            "unit": "ns",
            "range": "± 2350.9966781827475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807591.1998465402,
            "unit": "ns",
            "range": "± 820.9133121325306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733572.7987630208,
            "unit": "ns",
            "range": "± 1213.3480968119065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7851673.071428572,
            "unit": "ns",
            "range": "± 13449.17176440065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20040266.066666666,
            "unit": "ns",
            "range": "± 101834.6639835282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51391890.86666667,
            "unit": "ns",
            "range": "± 370588.49818090815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102168739.26666667,
            "unit": "ns",
            "range": "± 591938.5660556902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204762233.57142857,
            "unit": "ns",
            "range": "± 1783214.7157012946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45443.39473684211,
            "unit": "ns",
            "range": "± 2326.859646699516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367563.5638297873,
            "unit": "ns",
            "range": "± 93036.47483828366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498712.92,
            "unit": "ns",
            "range": "± 66137.82328461276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2178739.8305084747,
            "unit": "ns",
            "range": "± 96238.05425648538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5208566.717948718,
            "unit": "ns",
            "range": "± 181326.47899909108"
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
          "id": "427645e8deccade6832f99e7a9bac7a38e41d479",
          "message": "Changelog",
          "timestamp": "2023-03-14T19:19:39+09:00",
          "tree_id": "4dab05484c1d09894134fb208a9f267ecf913aae",
          "url": "https://github.com/greymistcube/libplanet/commit/427645e8deccade6832f99e7a9bac7a38e41d479"
        },
        "date": 1678790354147,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239077.96739130435,
            "unit": "ns",
            "range": "± 22827.298068996097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220623.67741935485,
            "unit": "ns",
            "range": "± 22214.39506665485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188111.42105263157,
            "unit": "ns",
            "range": "± 21477.63349794135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14287639.587628866,
            "unit": "ns",
            "range": "± 1132135.8080071558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11180211.042105263,
            "unit": "ns",
            "range": "± 1043873.5104792914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27745.656565656565,
            "unit": "ns",
            "range": "± 7427.10359971162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64136.54639175258,
            "unit": "ns",
            "range": "± 11869.540801301577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49390.18556701031,
            "unit": "ns",
            "range": "± 9722.364201856437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112256.28260869565,
            "unit": "ns",
            "range": "± 17363.950292011046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9896.09,
            "unit": "ns",
            "range": "± 5852.5648182155255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25023.632653061224,
            "unit": "ns",
            "range": "± 7724.728856400214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3905445.3191489363,
            "unit": "ns",
            "range": "± 272768.204064996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5839008.287234043,
            "unit": "ns",
            "range": "± 585035.2152026189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30237688.80412371,
            "unit": "ns",
            "range": "± 2648779.461510038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7756546.271739131,
            "unit": "ns",
            "range": "± 592850.4090308314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36944327.6185567,
            "unit": "ns",
            "range": "± 3137630.0244766464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7407099.790234375,
            "unit": "ns",
            "range": "± 162360.05744699424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2392513.1227678573,
            "unit": "ns",
            "range": "± 40082.16893495973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1612264.4156901042,
            "unit": "ns",
            "range": "± 40142.30560624364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2905929.6413143384,
            "unit": "ns",
            "range": "± 58135.91379052196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045799.0364332933,
            "unit": "ns",
            "range": "± 53612.03437911021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900573.9392475329,
            "unit": "ns",
            "range": "± 19757.165325276423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 11307554.24489796,
            "unit": "ns",
            "range": "± 859798.6385764631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25975296.721518986,
            "unit": "ns",
            "range": "± 1349067.568577863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 64646696.35294118,
            "unit": "ns",
            "range": "± 2055843.8526959561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 128669590.11764705,
            "unit": "ns",
            "range": "± 4128158.9532304634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 262307813.28125,
            "unit": "ns",
            "range": "± 15119019.76257945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66689.59340659341,
            "unit": "ns",
            "range": "± 9924.34391783717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738430.9456521738,
            "unit": "ns",
            "range": "± 174949.882474725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356943.1413043477,
            "unit": "ns",
            "range": "± 204437.89609150373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2752621.191011236,
            "unit": "ns",
            "range": "± 152352.4809344552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6908440.411111111,
            "unit": "ns",
            "range": "± 524482.724124219"
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
          "id": "c7bac12ae53cdacb07173b6595f8b42174ebd2b7",
          "message": "Fixed tests",
          "timestamp": "2023-03-15T09:59:16+09:00",
          "tree_id": "4283086a07662080e9bc8e33e4880b769f6ad26d",
          "url": "https://github.com/greymistcube/libplanet/commit/c7bac12ae53cdacb07173b6595f8b42174ebd2b7"
        },
        "date": 1678842750113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192286.375,
            "unit": "ns",
            "range": "± 3541.9472210447557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217445.67676767678,
            "unit": "ns",
            "range": "± 17079.76614559849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164134.7142857143,
            "unit": "ns",
            "range": "± 2200.2122774709865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11691884.066666666,
            "unit": "ns",
            "range": "± 121059.08414929739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9248753.933333334,
            "unit": "ns",
            "range": "± 83094.72872095753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17332.139784946237,
            "unit": "ns",
            "range": "± 1191.676500742417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57086.166666666664,
            "unit": "ns",
            "range": "± 5145.800185673476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37637.25,
            "unit": "ns",
            "range": "± 706.2956415930466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87212.8469387755,
            "unit": "ns",
            "range": "± 11273.249546020266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6229.135416666667,
            "unit": "ns",
            "range": "± 1401.596500384597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23680.72340425532,
            "unit": "ns",
            "range": "± 2329.192676620527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374271.1428571427,
            "unit": "ns",
            "range": "± 49813.138788657176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5323282.75,
            "unit": "ns",
            "range": "± 57352.143366660675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23981634,
            "unit": "ns",
            "range": "± 324951.07468289963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6174370.468085106,
            "unit": "ns",
            "range": "± 240263.3529375134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27899857.5,
            "unit": "ns",
            "range": "± 390216.52851476625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017990.797475962,
            "unit": "ns",
            "range": "± 44733.358541070185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961605.4475260417,
            "unit": "ns",
            "range": "± 4886.386252768413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345707.7958984375,
            "unit": "ns",
            "range": "± 2136.743708735847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583638.5263020834,
            "unit": "ns",
            "range": "± 7971.393469853528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809088.6178635817,
            "unit": "ns",
            "range": "± 924.7380989911504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736780.2297175481,
            "unit": "ns",
            "range": "± 615.4403822817269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8304502.357142857,
            "unit": "ns",
            "range": "± 44108.00916736994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20509334.076923076,
            "unit": "ns",
            "range": "± 541108.230609731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51129342.666666664,
            "unit": "ns",
            "range": "± 900387.5442471319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102187474.73333333,
            "unit": "ns",
            "range": "± 1033140.3803645374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206466823.26666668,
            "unit": "ns",
            "range": "± 1357125.9675135682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47253.397849462366,
            "unit": "ns",
            "range": "± 3069.4247093742283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431634.494949495,
            "unit": "ns",
            "range": "± 104955.8139521321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2509527.04,
            "unit": "ns",
            "range": "± 62447.02498616995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285354.6625,
            "unit": "ns",
            "range": "± 118978.96812334009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5357664.961538462,
            "unit": "ns",
            "range": "± 144879.53061753916"
          }
        ]
      }
    ]
  }
}