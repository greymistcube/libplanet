window.BENCHMARK_DATA = {
  "lastUpdate": 1682408119227,
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
          "id": "4d274668f6e5f59f976c213633050e5f9f0b6354",
          "message": "More generic action type attribute",
          "timestamp": "2023-04-25T15:05:55+09:00",
          "tree_id": "25a1af8f6e05b1ac97500b0c46b20ad00c536bb8",
          "url": "https://github.com/greymistcube/libplanet/commit/4d274668f6e5f59f976c213633050e5f9f0b6354"
        },
        "date": 1682403740312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367098.98989899,
            "unit": "ns",
            "range": "± 141390.3804820075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448841.8604651163,
            "unit": "ns",
            "range": "± 83764.88988477594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139514.432989691,
            "unit": "ns",
            "range": "± 135100.44025163486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5498080,
            "unit": "ns",
            "range": "± 405506.5923812416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49146.875,
            "unit": "ns",
            "range": "± 3390.278769006901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6886433.333333333,
            "unit": "ns",
            "range": "± 81853.74296936725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19487163.157894738,
            "unit": "ns",
            "range": "± 288347.8574579405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48566760,
            "unit": "ns",
            "range": "± 837789.0331103648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96834994.11764705,
            "unit": "ns",
            "range": "± 1932387.6831754632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187480403.33333334,
            "unit": "ns",
            "range": "± 2729546.5007597003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4741689.557291667,
            "unit": "ns",
            "range": "± 25740.564177738812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516874.1666666667,
            "unit": "ns",
            "range": "± 6292.3079255333605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157468.3723958333,
            "unit": "ns",
            "range": "± 5168.86638324723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643211.1197916665,
            "unit": "ns",
            "range": "± 5505.637911859011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823774.0885416666,
            "unit": "ns",
            "range": "± 2896.4001177819823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761373.92578125,
            "unit": "ns",
            "range": "± 2451.4258784181843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016235.849056604,
            "unit": "ns",
            "range": "± 125830.70753739482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3130996.153846154,
            "unit": "ns",
            "range": "± 117928.27823913336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3850357.1428571427,
            "unit": "ns",
            "range": "± 89786.07114373906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4095300,
            "unit": "ns",
            "range": "± 109093.0721906758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6555611.111111111,
            "unit": "ns",
            "range": "± 247845.70092024285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266301.3698630137,
            "unit": "ns",
            "range": "± 13252.195763037043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252566.66666666666,
            "unit": "ns",
            "range": "± 9357.690080162072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207061.53846153847,
            "unit": "ns",
            "range": "± 2632.3432088598875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862492.3076923075,
            "unit": "ns",
            "range": "± 39979.6919601786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3440138.888888889,
            "unit": "ns",
            "range": "± 64734.33618293889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19072.340425531915,
            "unit": "ns",
            "range": "± 1566.408415364444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87293.81443298969,
            "unit": "ns",
            "range": "± 6587.611707354407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84253.68421052632,
            "unit": "ns",
            "range": "± 9051.446464002616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103401.0101010101,
            "unit": "ns",
            "range": "± 18422.443582237214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6096.7032967032965,
            "unit": "ns",
            "range": "± 789.718733256137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19410.63829787234,
            "unit": "ns",
            "range": "± 2257.9474019372888"
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
          "id": "af902ed0d0a03114471168937609ece48c506ad6",
          "message": "Added test for integer type id",
          "timestamp": "2023-04-25T15:24:04+09:00",
          "tree_id": "c93cdcdd0f726862bedf4aaff39ff28520f60b89",
          "url": "https://github.com/greymistcube/libplanet/commit/af902ed0d0a03114471168937609ece48c506ad6"
        },
        "date": 1682404810311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1269717.4603174604,
            "unit": "ns",
            "range": "± 57791.7410654971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2414197.2972972975,
            "unit": "ns",
            "range": "± 80829.84352084076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184830.612244898,
            "unit": "ns",
            "range": "± 85966.12269784349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5425317.171717172,
            "unit": "ns",
            "range": "± 327958.93596868974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46413.40206185567,
            "unit": "ns",
            "range": "± 2876.218179093113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6707330.769230769,
            "unit": "ns",
            "range": "± 14880.265713094901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18499720,
            "unit": "ns",
            "range": "± 248302.42850201848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47998126.666666664,
            "unit": "ns",
            "range": "± 743873.359485592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95109930.76923077,
            "unit": "ns",
            "range": "± 1304260.0548360844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189318037.0967742,
            "unit": "ns",
            "range": "± 5760288.704844688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4719979.609375,
            "unit": "ns",
            "range": "± 43672.550629077734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475966.5494791667,
            "unit": "ns",
            "range": "± 11007.274699118343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145888.0989583333,
            "unit": "ns",
            "range": "± 6855.9139333644025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683861.1979166665,
            "unit": "ns",
            "range": "± 9064.820598277574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831194.4270833334,
            "unit": "ns",
            "range": "± 2781.729862329308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754718.2161458334,
            "unit": "ns",
            "range": "± 1855.118404448735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2936985.714285714,
            "unit": "ns",
            "range": "± 124884.49416607687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148011.111111111,
            "unit": "ns",
            "range": "± 86608.33737328122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3932429.6296296297,
            "unit": "ns",
            "range": "± 106577.59475473118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3908523.529411765,
            "unit": "ns",
            "range": "± 121359.88069255519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6490325.531914894,
            "unit": "ns",
            "range": "± 233112.0615648052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258040,
            "unit": "ns",
            "range": "± 8931.184203791303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241379.3103448276,
            "unit": "ns",
            "range": "± 6545.793595363625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205330.76923076922,
            "unit": "ns",
            "range": "± 1890.0549442563017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3986038.4615384615,
            "unit": "ns",
            "range": "± 58536.71979281521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3409928.5714285714,
            "unit": "ns",
            "range": "± 39850.94205182084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17827.083333333332,
            "unit": "ns",
            "range": "± 1264.9509386505795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81101.0101010101,
            "unit": "ns",
            "range": "± 5151.054874122722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71547.31182795699,
            "unit": "ns",
            "range": "± 3929.4482242878044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93780.61224489796,
            "unit": "ns",
            "range": "± 11556.010246498057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5637.113402061856,
            "unit": "ns",
            "range": "± 803.0306640612675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17570.652173913044,
            "unit": "ns",
            "range": "± 1486.9792407101434"
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
          "id": "67ed9fb9fa43e61a55173a2e583f1148a31f4d80",
          "message": "Changelog",
          "timestamp": "2023-04-25T15:28:47+09:00",
          "tree_id": "4c842014e58b00895e9c64496a7937bd58226f44",
          "url": "https://github.com/greymistcube/libplanet/commit/67ed9fb9fa43e61a55173a2e583f1148a31f4d80"
        },
        "date": 1682405113995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500808.2474226805,
            "unit": "ns",
            "range": "± 109968.7717700112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800992.3076923075,
            "unit": "ns",
            "range": "± 115459.59966739209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2406052.1276595746,
            "unit": "ns",
            "range": "± 135316.5994702741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5808600,
            "unit": "ns",
            "range": "± 223010.08754972537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69217.70833333333,
            "unit": "ns",
            "range": "± 5756.716805366838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7919920,
            "unit": "ns",
            "range": "± 96664.39882397241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20673813.333333332,
            "unit": "ns",
            "range": "± 250054.00521449267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52424280,
            "unit": "ns",
            "range": "± 392432.08365998097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103808513.33333333,
            "unit": "ns",
            "range": "± 665184.6015169309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206590566.66666666,
            "unit": "ns",
            "range": "± 1096757.5918306175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4979671.205357143,
            "unit": "ns",
            "range": "± 22450.474755028714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528290.4947916667,
            "unit": "ns",
            "range": "± 2898.1013971739085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196074.3098958333,
            "unit": "ns",
            "range": "± 5291.8978101769335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2721530.15625,
            "unit": "ns",
            "range": "± 15669.672566892401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850584.6354166666,
            "unit": "ns",
            "range": "± 2527.6746493025485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769071.6646634615,
            "unit": "ns",
            "range": "± 2015.7978876161842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3478256.6666666665,
            "unit": "ns",
            "range": "± 61972.45317381709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3647664.705882353,
            "unit": "ns",
            "range": "± 148283.5470624161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297953.125,
            "unit": "ns",
            "range": "± 130095.31985426636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4546447.5,
            "unit": "ns",
            "range": "± 160099.8998822538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7144685.365853659,
            "unit": "ns",
            "range": "± 255168.05987522774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311542.42424242425,
            "unit": "ns",
            "range": "± 9829.071367092312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295497.5,
            "unit": "ns",
            "range": "± 10461.344902998237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266453.0612244898,
            "unit": "ns",
            "range": "± 10570.243257229553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4227986.666666667,
            "unit": "ns",
            "range": "± 70136.24360248179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3841657.1428571427,
            "unit": "ns",
            "range": "± 38512.629582549125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31325.51020408163,
            "unit": "ns",
            "range": "± 3294.107867727573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118739.79591836735,
            "unit": "ns",
            "range": "± 9497.994794300557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118098.48484848485,
            "unit": "ns",
            "range": "± 7007.537685634264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135061.79775280898,
            "unit": "ns",
            "range": "± 13062.389674331636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11277.835051546392,
            "unit": "ns",
            "range": "± 1449.1191482559066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28687.36842105263,
            "unit": "ns",
            "range": "± 2593.085819048341"
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
          "id": "1d9b1f886c702c69dacd7ff6d5ba0c8dfd9f145f",
          "message": "Fixed test",
          "timestamp": "2023-04-25T16:17:53+09:00",
          "tree_id": "f01d003011d1829011c235c62a1bf0dce41b48d2",
          "url": "https://github.com/greymistcube/libplanet/commit/1d9b1f886c702c69dacd7ff6d5ba0c8dfd9f145f"
        },
        "date": 1682408097462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1502278.5714285714,
            "unit": "ns",
            "range": "± 134371.5170251079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704971.4285714286,
            "unit": "ns",
            "range": "± 144002.99408820755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2338647,
            "unit": "ns",
            "range": "± 189103.16913464904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5700006,
            "unit": "ns",
            "range": "± 357293.42857803934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56505.208333333336,
            "unit": "ns",
            "range": "± 5105.010331278099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7110735.714285715,
            "unit": "ns",
            "range": "± 75300.50165470711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20213423.333333332,
            "unit": "ns",
            "range": "± 175899.26689795524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51084857.692307696,
            "unit": "ns",
            "range": "± 325564.6235427985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102506960,
            "unit": "ns",
            "range": "± 1349500.7080927587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204345766.66666666,
            "unit": "ns",
            "range": "± 2460619.4213381857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849407.421875,
            "unit": "ns",
            "range": "± 27786.40857850373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525197.9817708333,
            "unit": "ns",
            "range": "± 5336.742238682595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156502.978515625,
            "unit": "ns",
            "range": "± 3787.0865435647356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662793.6328125,
            "unit": "ns",
            "range": "± 7181.739864523739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854351.4388020834,
            "unit": "ns",
            "range": "± 2323.695076911154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786146.0091145834,
            "unit": "ns",
            "range": "± 2791.5436682971563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338490.476190476,
            "unit": "ns",
            "range": "± 76763.36303707586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541683.3333333335,
            "unit": "ns",
            "range": "± 74480.22437888739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3995600,
            "unit": "ns",
            "range": "± 118084.85568800574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4382740,
            "unit": "ns",
            "range": "± 185203.4082959718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6677784.2105263155,
            "unit": "ns",
            "range": "± 104723.90294461536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282590.9090909091,
            "unit": "ns",
            "range": "± 10788.510224398588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262765.2173913043,
            "unit": "ns",
            "range": "± 10045.434947528362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232589.53488372092,
            "unit": "ns",
            "range": "± 12676.165954677836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4079892.8571428573,
            "unit": "ns",
            "range": "± 62045.48535346671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3583735.714285714,
            "unit": "ns",
            "range": "± 39683.93604747115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28116.326530612245,
            "unit": "ns",
            "range": "± 3055.051381535989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101324.24242424243,
            "unit": "ns",
            "range": "± 11293.67793989268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94260.20408163265,
            "unit": "ns",
            "range": "± 10210.177758238517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118773.95833333333,
            "unit": "ns",
            "range": "± 18091.51150062352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7412.903225806452,
            "unit": "ns",
            "range": "± 1015.1275146343646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22561.052631578947,
            "unit": "ns",
            "range": "± 2976.6572261315714"
          }
        ]
      }
    ]
  }
}