window.BENCHMARK_DATA = {
  "lastUpdate": 1693381563501,
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
          "id": "ce517db3abbe0e18c4a4adeb6bca2fa90277e54d",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T10:34:04+09:00",
          "tree_id": "cc00a44ef2dd3cb22070002c104dd70e39fed669",
          "url": "https://github.com/greymistcube/libplanet/commit/ce517db3abbe0e18c4a4adeb6bca2fa90277e54d"
        },
        "date": 1693374630027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329968,
            "unit": "ns",
            "range": "± 107251.52715354536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402528.9855072466,
            "unit": "ns",
            "range": "± 115097.74759058603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708319.587628866,
            "unit": "ns",
            "range": "± 107942.24115159079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4232721.052631579,
            "unit": "ns",
            "range": "± 181227.64663818554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43867.54385964912,
            "unit": "ns",
            "range": "± 1815.5206658753712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7117771.428571428,
            "unit": "ns",
            "range": "± 44886.11963919064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18180353.333333332,
            "unit": "ns",
            "range": "± 157863.33993438154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46819223.07692308,
            "unit": "ns",
            "range": "± 403039.84326169326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92420642.85714285,
            "unit": "ns",
            "range": "± 314627.5128912471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186448607.14285713,
            "unit": "ns",
            "range": "± 456862.245631565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4296873.671875,
            "unit": "ns",
            "range": "± 16848.181924121604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386256.5955528845,
            "unit": "ns",
            "range": "± 1456.1001181333138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1005639.7181919643,
            "unit": "ns",
            "range": "± 2539.077530474122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567764.921875,
            "unit": "ns",
            "range": "± 5737.3747278209585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805441.9401041666,
            "unit": "ns",
            "range": "± 1186.6854806187255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715289.9676983173,
            "unit": "ns",
            "range": "± 2754.8655085941264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097926.6666666665,
            "unit": "ns",
            "range": "± 53981.51094411423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3175892.6829268294,
            "unit": "ns",
            "range": "± 113727.82726809633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3948964.705882353,
            "unit": "ns",
            "range": "± 122005.90865560803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3540302.6315789474,
            "unit": "ns",
            "range": "± 76690.60038319234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5663957.692307692,
            "unit": "ns",
            "range": "± 148910.80799747727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252003.0303030303,
            "unit": "ns",
            "range": "± 7481.497378887667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238927.14285714287,
            "unit": "ns",
            "range": "± 11206.195509867879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216295,
            "unit": "ns",
            "range": "± 13301.94316328227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804450,
            "unit": "ns",
            "range": "± 31573.10808023426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525891.6666666665,
            "unit": "ns",
            "range": "± 32022.61866338551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19248.936170212764,
            "unit": "ns",
            "range": "± 1291.7225875526747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87621.64948453609,
            "unit": "ns",
            "range": "± 8260.501230808724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69929.88505747127,
            "unit": "ns",
            "range": "± 3897.7666516039058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78874.19354838709,
            "unit": "ns",
            "range": "± 10726.439330050878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4473.469387755102,
            "unit": "ns",
            "range": "± 624.8382917249925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19007.21649484536,
            "unit": "ns",
            "range": "± 1927.0685543224502"
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
          "id": "129e403b507e77e1676d01327687a498f62a321a",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-30T16:14:02+09:00",
          "tree_id": "5b943276cdf60cb2702d638a64a6808766abecab",
          "url": "https://github.com/greymistcube/libplanet/commit/129e403b507e77e1676d01327687a498f62a321a"
        },
        "date": 1693380825139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380404.1237113401,
            "unit": "ns",
            "range": "± 125933.30486604621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658359,
            "unit": "ns",
            "range": "± 180854.2893010444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1805474.4897959183,
            "unit": "ns",
            "range": "± 140748.91097432567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5074265,
            "unit": "ns",
            "range": "± 348188.79018588626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51974.72527472527,
            "unit": "ns",
            "range": "± 3940.6314611463367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8124002.2727272725,
            "unit": "ns",
            "range": "± 304947.0754605197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21826995,
            "unit": "ns",
            "range": "± 970802.7510776841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55991772.631578945,
            "unit": "ns",
            "range": "± 3213013.800171742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109836329.57746479,
            "unit": "ns",
            "range": "± 5370762.144276954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216863617.24137932,
            "unit": "ns",
            "range": "± 6259263.197286595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4958140.569196428,
            "unit": "ns",
            "range": "± 55608.112907739305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574461.5071614583,
            "unit": "ns",
            "range": "± 14308.226013727033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184070.7109375,
            "unit": "ns",
            "range": "± 31096.498691464865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2901755.5729166665,
            "unit": "ns",
            "range": "± 31501.71111927243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926726.1461759869,
            "unit": "ns",
            "range": "± 19921.314526723334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 855104.5543323864,
            "unit": "ns",
            "range": "± 20109.398430474215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421207.3684210526,
            "unit": "ns",
            "range": "± 194480.22720810462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3524854.0816326533,
            "unit": "ns",
            "range": "± 268581.339085235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482687.62886598,
            "unit": "ns",
            "range": "± 260004.35303156145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3913291.489361702,
            "unit": "ns",
            "range": "± 274960.2523218542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6685096.907216495,
            "unit": "ns",
            "range": "± 386226.4311723997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273069.07216494845,
            "unit": "ns",
            "range": "± 20338.378954704196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264701.0869565217,
            "unit": "ns",
            "range": "± 15758.726830966223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247036.45833333334,
            "unit": "ns",
            "range": "± 20038.122192679926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4626664,
            "unit": "ns",
            "range": "± 186786.20432604387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4052191.3978494625,
            "unit": "ns",
            "range": "± 227961.2889791264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21217.894736842107,
            "unit": "ns",
            "range": "± 2262.552641793534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89156.84210526316,
            "unit": "ns",
            "range": "± 8421.346390452985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78587.75510204081,
            "unit": "ns",
            "range": "± 8619.102080940609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86758.33333333333,
            "unit": "ns",
            "range": "± 14379.778687021553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5096.875,
            "unit": "ns",
            "range": "± 703.1437862987386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20962.36559139785,
            "unit": "ns",
            "range": "± 2275.0974168581183"
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
          "id": "63f27cdf99bfc4d0b20e9bdb02af8c9c61f022b3",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:23:46+09:00",
          "tree_id": "c7ca4ed2e29ba02512346734c03dd9cf8c5d34b2",
          "url": "https://github.com/greymistcube/libplanet/commit/63f27cdf99bfc4d0b20e9bdb02af8c9c61f022b3"
        },
        "date": 1693381253676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337840.4040404041,
            "unit": "ns",
            "range": "± 109630.18067175115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2556900,
            "unit": "ns",
            "range": "± 155056.7644644553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700808.4210526317,
            "unit": "ns",
            "range": "± 141458.61560305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4547693.333333333,
            "unit": "ns",
            "range": "± 171706.37648984598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49157.142857142855,
            "unit": "ns",
            "range": "± 2650.450551118483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7105028.571428572,
            "unit": "ns",
            "range": "± 64150.74109016654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20926073.333333332,
            "unit": "ns",
            "range": "± 385091.6207618031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53266806.666666664,
            "unit": "ns",
            "range": "± 725523.4292432963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108205775,
            "unit": "ns",
            "range": "± 2066477.6519478743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204973410,
            "unit": "ns",
            "range": "± 5450430.687646008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4584901.40625,
            "unit": "ns",
            "range": "± 53247.47302005761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438920.1869419643,
            "unit": "ns",
            "range": "± 8755.200964105814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068749.8325892857,
            "unit": "ns",
            "range": "± 9237.2374831089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675265.13671875,
            "unit": "ns",
            "range": "± 8992.559278898574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842342.1944754465,
            "unit": "ns",
            "range": "± 4753.151258729068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772018.4709821428,
            "unit": "ns",
            "range": "± 7725.218162547796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332464.705882353,
            "unit": "ns",
            "range": "± 106561.07619108293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3391006.6666666665,
            "unit": "ns",
            "range": "± 145318.52783135895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3996188.3720930233,
            "unit": "ns",
            "range": "± 146356.9905098364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3653806.25,
            "unit": "ns",
            "range": "± 208786.8970543385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6028791.304347826,
            "unit": "ns",
            "range": "± 147170.13318865618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258957.5,
            "unit": "ns",
            "range": "± 13413.61272473281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254982.35294117648,
            "unit": "ns",
            "range": "± 11529.636583785732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228906,
            "unit": "ns",
            "range": "± 17421.08799905181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4030267.7419354836,
            "unit": "ns",
            "range": "± 104338.8083348242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824713.3333333335,
            "unit": "ns",
            "range": "± 47473.0128850166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26311.224489795917,
            "unit": "ns",
            "range": "± 3992.412459660682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95541.9191919192,
            "unit": "ns",
            "range": "± 9032.838918755217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70772.34042553192,
            "unit": "ns",
            "range": "± 5453.112049339283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90439.58333333333,
            "unit": "ns",
            "range": "± 15413.018961539365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6473.19587628866,
            "unit": "ns",
            "range": "± 1544.986209749508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21116.666666666668,
            "unit": "ns",
            "range": "± 2804.044697694148"
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
          "id": "fd44eed5fe8953f81905cc4f9a5eed05067f3047",
          "message": "Cleanup",
          "timestamp": "2023-08-30T16:18:57+09:00",
          "tree_id": "e96c08a54004d96573c2a4be8c74fe55da2691a8",
          "url": "https://github.com/greymistcube/libplanet/commit/fd44eed5fe8953f81905cc4f9a5eed05067f3047"
        },
        "date": 1693381282233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367046.5909090908,
            "unit": "ns",
            "range": "± 155885.46115574334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2706210.5263157897,
            "unit": "ns",
            "range": "± 350150.8004838876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1942462.105263158,
            "unit": "ns",
            "range": "± 195254.5677014668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5147634.343434343,
            "unit": "ns",
            "range": "± 358976.8258001543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55342.045454545456,
            "unit": "ns",
            "range": "± 4230.396888826223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9141092.592592593,
            "unit": "ns",
            "range": "± 381326.39604602975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23845041.666666668,
            "unit": "ns",
            "range": "± 1751308.7220504058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64444626.984126985,
            "unit": "ns",
            "range": "± 2941368.831782695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128322903.79746835,
            "unit": "ns",
            "range": "± 6651383.774852419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240324077,
            "unit": "ns",
            "range": "± 14065034.247581003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5528182.265625,
            "unit": "ns",
            "range": "± 195929.66476544563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1703962.2486552254,
            "unit": "ns",
            "range": "± 76640.80452943298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261389.092548077,
            "unit": "ns",
            "range": "± 33465.56025161364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3121986.3596270164,
            "unit": "ns",
            "range": "± 94314.88845836527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973615.8837890625,
            "unit": "ns",
            "range": "± 34451.62225093059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906623.2991536459,
            "unit": "ns",
            "range": "± 30074.986964807198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470557.4468085105,
            "unit": "ns",
            "range": "± 433173.2528526658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452206.4516129033,
            "unit": "ns",
            "range": "± 375859.85935048683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4445754.736842105,
            "unit": "ns",
            "range": "± 513786.17991741665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4114508.4210526315,
            "unit": "ns",
            "range": "± 516572.10463790403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939586.458333333,
            "unit": "ns",
            "range": "± 478382.7132547842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289293.6170212766,
            "unit": "ns",
            "range": "± 17450.58034904332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264443.6170212766,
            "unit": "ns",
            "range": "± 28853.506741687575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251755.91397849462,
            "unit": "ns",
            "range": "± 20583.443443518387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4529332.323232323,
            "unit": "ns",
            "range": "± 415970.974955912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4026438.947368421,
            "unit": "ns",
            "range": "± 361508.046258335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23185.263157894737,
            "unit": "ns",
            "range": "± 2079.891999091188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99270.96774193548,
            "unit": "ns",
            "range": "± 11484.52248297645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84472.04301075269,
            "unit": "ns",
            "range": "± 9229.44679664188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95329.16666666667,
            "unit": "ns",
            "range": "± 16190.418977489955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5391.666666666667,
            "unit": "ns",
            "range": "± 882.7787070461287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21958.88888888889,
            "unit": "ns",
            "range": "± 2025.061765985159"
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
          "id": "bac9657b4695325b01efb805c245f1ed78e35e4f",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:24:59+09:00",
          "tree_id": "0299de6e193f1bfee715e34eafd805368824054a",
          "url": "https://github.com/greymistcube/libplanet/commit/bac9657b4695325b01efb805c245f1ed78e35e4f"
        },
        "date": 1693381340521,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424487.878787879,
            "unit": "ns",
            "range": "± 137525.0695311083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2642588.524590164,
            "unit": "ns",
            "range": "± 118386.15642374274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1758302.1739130435,
            "unit": "ns",
            "range": "± 99159.97173871203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4842279,
            "unit": "ns",
            "range": "± 296353.8412970467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55003.092783505155,
            "unit": "ns",
            "range": "± 4674.051900480447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7733700,
            "unit": "ns",
            "range": "± 164650.48185921166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21365253.846153848,
            "unit": "ns",
            "range": "± 200847.33263262679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53615407.14285714,
            "unit": "ns",
            "range": "± 267083.8256897167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107704066.66666667,
            "unit": "ns",
            "range": "± 1068203.056316452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215005792.85714287,
            "unit": "ns",
            "range": "± 1450689.1494757219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4596004.427083333,
            "unit": "ns",
            "range": "± 17652.987477758004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1450056.9270833333,
            "unit": "ns",
            "range": "± 5108.6444110041975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078963.5546875,
            "unit": "ns",
            "range": "± 2467.4529334860736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730406.1197916665,
            "unit": "ns",
            "range": "± 8884.753478810957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840984.27734375,
            "unit": "ns",
            "range": "± 2327.917215469037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771509.1029575893,
            "unit": "ns",
            "range": "± 1793.5044672667022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448716.6666666665,
            "unit": "ns",
            "range": "± 72691.84961190629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657011.111111111,
            "unit": "ns",
            "range": "± 77717.99616629713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4238426.666666667,
            "unit": "ns",
            "range": "± 77217.89639591021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3964976.923076923,
            "unit": "ns",
            "range": "± 34806.42071625468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6262485.185185186,
            "unit": "ns",
            "range": "± 172641.16565805528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274168.75,
            "unit": "ns",
            "range": "± 10732.633795648177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266564.91228070174,
            "unit": "ns",
            "range": "± 11087.30759581923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249637.14285714287,
            "unit": "ns",
            "range": "± 12025.385846695512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294292.857142857,
            "unit": "ns",
            "range": "± 48187.12666080201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3861930.769230769,
            "unit": "ns",
            "range": "± 29510.545703058557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25293.684210526317,
            "unit": "ns",
            "range": "± 2015.514850350173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98647.91666666667,
            "unit": "ns",
            "range": "± 8062.296645062279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88443,
            "unit": "ns",
            "range": "± 9338.540268341425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97225,
            "unit": "ns",
            "range": "± 15796.70185430124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6994.791666666667,
            "unit": "ns",
            "range": "± 1067.053966145418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24395.744680851065,
            "unit": "ns",
            "range": "± 2361.879827850681"
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
          "id": "0de19e3e9ae4d4b8f1faf9acb9f6905a1505a4f6",
          "message": "Changelog",
          "timestamp": "2023-08-30T16:25:57+09:00",
          "tree_id": "915801e02cf8e43e3f43310bde45e82eed96691c",
          "url": "https://github.com/greymistcube/libplanet/commit/0de19e3e9ae4d4b8f1faf9acb9f6905a1505a4f6"
        },
        "date": 1693381535007,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601276.2886597938,
            "unit": "ns",
            "range": "± 143317.11253167156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047259.0163934426,
            "unit": "ns",
            "range": "± 135754.77570119977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2060825.7731958763,
            "unit": "ns",
            "range": "± 139502.66595298346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5227006.666666667,
            "unit": "ns",
            "range": "± 152576.80244282933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62495.744680851065,
            "unit": "ns",
            "range": "± 6049.507487170916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9431227.777777778,
            "unit": "ns",
            "range": "± 199797.6293963927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25661031.57894737,
            "unit": "ns",
            "range": "± 489929.43262001354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62467566.666666664,
            "unit": "ns",
            "range": "± 302296.6945157547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126117523.07692307,
            "unit": "ns",
            "range": "± 1225149.0699460795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252793830.76923078,
            "unit": "ns",
            "range": "± 2968814.158432234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5556273.660714285,
            "unit": "ns",
            "range": "± 73110.25922910856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1714338.5286458333,
            "unit": "ns",
            "range": "± 9673.74069857782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289958.2942708333,
            "unit": "ns",
            "range": "± 10593.902388968316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3228833.8040865385,
            "unit": "ns",
            "range": "± 29353.24791288804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028360.2818080357,
            "unit": "ns",
            "range": "± 9137.01572577454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931137.8971354166,
            "unit": "ns",
            "range": "± 10414.116488890933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4062792.3076923075,
            "unit": "ns",
            "range": "± 34963.32510737648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4208681.578947368,
            "unit": "ns",
            "range": "± 119878.90028096971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5053040,
            "unit": "ns",
            "range": "± 63799.908195186974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4740115,
            "unit": "ns",
            "range": "± 107918.18184941873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153411.764705882,
            "unit": "ns",
            "range": "± 117094.26695163678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318650,
            "unit": "ns",
            "range": "± 10258.130552115352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312263.9344262295,
            "unit": "ns",
            "range": "± 13934.681347712803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296905.1282051282,
            "unit": "ns",
            "range": "± 10218.712163115499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5056207.142857143,
            "unit": "ns",
            "range": "± 48232.02677260626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4690907.142857143,
            "unit": "ns",
            "range": "± 37667.72673473458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29811.702127659573,
            "unit": "ns",
            "range": "± 2229.8129717114457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118366.32653061225,
            "unit": "ns",
            "range": "± 9692.189903700399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106127.27272727272,
            "unit": "ns",
            "range": "± 11098.049269494442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110315.21739130435,
            "unit": "ns",
            "range": "± 12341.513387728199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9032.291666666666,
            "unit": "ns",
            "range": "± 1325.4190830126274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28631.25,
            "unit": "ns",
            "range": "± 2728.1114539664904"
          }
        ]
      }
    ]
  }
}