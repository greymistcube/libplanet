window.BENCHMARK_DATA = {
  "lastUpdate": 1693381276654,
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
      }
    ]
  }
}