window.BENCHMARK_DATA = {
  "lastUpdate": 1689925239298,
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
          "id": "94ceefc81e5c28a3cba877c38447820481d4f9d3",
          "message": "Removed more string usage",
          "timestamp": "2023-07-21T13:17:38+09:00",
          "tree_id": "88db91efeeaac436e3e33d1df6fc60791a1ed43f",
          "url": "https://github.com/greymistcube/libplanet/commit/94ceefc81e5c28a3cba877c38447820481d4f9d3"
        },
        "date": 1689914378500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777731.5789473683,
            "unit": "ns",
            "range": "± 183736.2073348045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3519188.144329897,
            "unit": "ns",
            "range": "± 364711.5713830413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366451.6129032257,
            "unit": "ns",
            "range": "± 273972.14576481853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6555813.186813187,
            "unit": "ns",
            "range": "± 430116.13553364633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70054.08163265306,
            "unit": "ns",
            "range": "± 16601.87648298089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8987993.617021276,
            "unit": "ns",
            "range": "± 886556.0326897587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25001090.52631579,
            "unit": "ns",
            "range": "± 1986610.3606701693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66623636,
            "unit": "ns",
            "range": "± 4799413.006059315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130421845.23809524,
            "unit": "ns",
            "range": "± 4762834.628149367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276223991.6666667,
            "unit": "ns",
            "range": "± 9123864.687115088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5896596.5234375,
            "unit": "ns",
            "range": "± 115911.5872373184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050906.0609879033,
            "unit": "ns",
            "range": "± 60954.88055804498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1475368.2896205357,
            "unit": "ns",
            "range": "± 22940.884269219183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3205643.0245535714,
            "unit": "ns",
            "range": "± 49414.84190411691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1075731.290952621,
            "unit": "ns",
            "range": "± 32693.819442679884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982874.8347355769,
            "unit": "ns",
            "range": "± 23985.55789701481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859107.3684210526,
            "unit": "ns",
            "range": "± 330172.457271762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4037542.3913043477,
            "unit": "ns",
            "range": "± 372420.81988568883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5116662.222222222,
            "unit": "ns",
            "range": "± 440642.6057163951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4477927.173913044,
            "unit": "ns",
            "range": "± 423507.76115551696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8075278.865979382,
            "unit": "ns",
            "range": "± 722175.2238548081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327755.91397849465,
            "unit": "ns",
            "range": "± 46680.34094722361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316979.38144329895,
            "unit": "ns",
            "range": "± 49073.688083466914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283889.79591836734,
            "unit": "ns",
            "range": "± 47763.572561895395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4875167.708333333,
            "unit": "ns",
            "range": "± 455584.2764475877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4285959.375,
            "unit": "ns",
            "range": "± 448773.0289245685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29361.224489795917,
            "unit": "ns",
            "range": "± 11016.722365615082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106241.83673469388,
            "unit": "ns",
            "range": "± 19821.230279362142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117631.57894736843,
            "unit": "ns",
            "range": "± 21685.09274779343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142989.58333333334,
            "unit": "ns",
            "range": "± 31174.485110901587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7400,
            "unit": "ns",
            "range": "± 1859.5382095943005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28557,
            "unit": "ns",
            "range": "± 11130.495510220122"
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
          "id": "f64165140c35565e117126be8559b0b1d51d2cab",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:02:01+09:00",
          "tree_id": "6d9838ae626adc66676c4eaa170f9f89a93aec0b",
          "url": "https://github.com/greymistcube/libplanet/commit/f64165140c35565e117126be8559b0b1d51d2cab"
        },
        "date": 1689920477479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622503.6585365853,
            "unit": "ns",
            "range": "± 85390.34039845165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062269.230769231,
            "unit": "ns",
            "range": "± 143117.02917005206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135655.6701030927,
            "unit": "ns",
            "range": "± 158332.0771676522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5859573.684210527,
            "unit": "ns",
            "range": "± 297591.15594762826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55938.17204301075,
            "unit": "ns",
            "range": "± 4214.953954629243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9543912.5,
            "unit": "ns",
            "range": "± 294568.50427307637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25199995.833333332,
            "unit": "ns",
            "range": "± 977789.5237464078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61465242.85714286,
            "unit": "ns",
            "range": "± 475098.7908834341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125088577.27272727,
            "unit": "ns",
            "range": "± 2992891.559604877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250635420,
            "unit": "ns",
            "range": "± 5595137.828470265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6070892.131696428,
            "unit": "ns",
            "range": "± 90236.06071074872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947650.1432291667,
            "unit": "ns",
            "range": "± 22460.464237840486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474467.6231971155,
            "unit": "ns",
            "range": "± 15494.49701536342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3290153.4635416665,
            "unit": "ns",
            "range": "± 49057.837065435044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1033652.9166666666,
            "unit": "ns",
            "range": "± 16662.58580000505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967096.6015625,
            "unit": "ns",
            "range": "± 12541.722935212843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4039084.6153846155,
            "unit": "ns",
            "range": "± 26563.221634239766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4207414.705882353,
            "unit": "ns",
            "range": "± 119542.96332371011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5147982.142857143,
            "unit": "ns",
            "range": "± 122757.08338488669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4644657.142857143,
            "unit": "ns",
            "range": "± 115901.45216414079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7645821.739130435,
            "unit": "ns",
            "range": "± 288055.46141366864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317641.17647058825,
            "unit": "ns",
            "range": "± 7579.202710410257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306853.5714285714,
            "unit": "ns",
            "range": "± 12396.890582073236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285080.76923076925,
            "unit": "ns",
            "range": "± 11731.373028003667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4950742.857142857,
            "unit": "ns",
            "range": "± 72763.18505192787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4614880,
            "unit": "ns",
            "range": "± 117560.26823151887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27361.458333333332,
            "unit": "ns",
            "range": "± 2922.37717914594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104130.85106382979,
            "unit": "ns",
            "range": "± 6366.5798552164815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92646,
            "unit": "ns",
            "range": "± 8483.381496559117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111505.4945054945,
            "unit": "ns",
            "range": "± 14445.432670243043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.916666666667,
            "unit": "ns",
            "range": "± 1056.4069358136037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23015.463917525773,
            "unit": "ns",
            "range": "± 2005.4789643096885"
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
          "id": "fe1d5afae59d3ab659475584cbf054a6ddf27639",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:01:37+09:00",
          "tree_id": "6d9838ae626adc66676c4eaa170f9f89a93aec0b",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1d5afae59d3ab659475584cbf054a6ddf27639"
        },
        "date": 1689920478754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693269.0721649486,
            "unit": "ns",
            "range": "± 104374.68000033256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190892.6315789474,
            "unit": "ns",
            "range": "± 196332.24892107098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101670.5263157897,
            "unit": "ns",
            "range": "± 131497.30105933832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6057821.176470588,
            "unit": "ns",
            "range": "± 325025.04595584545"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54992.22222222222,
            "unit": "ns",
            "range": "± 3563.9338124781925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8423242.105263159,
            "unit": "ns",
            "range": "± 182034.2468260955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23562078.57142857,
            "unit": "ns",
            "range": "± 861589.7228409972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59466335.294117644,
            "unit": "ns",
            "range": "± 1833871.8429302347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121047733.33333333,
            "unit": "ns",
            "range": "± 4266733.794657401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240986462.5,
            "unit": "ns",
            "range": "± 10212193.730127672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6005046.645220588,
            "unit": "ns",
            "range": "± 105334.55234123541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954597.7416992188,
            "unit": "ns",
            "range": "± 36308.82206787642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1504287.9166666667,
            "unit": "ns",
            "range": "± 44341.96467400012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203842.3177083335,
            "unit": "ns",
            "range": "± 34914.05301022824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020447.3225911459,
            "unit": "ns",
            "range": "± 23546.178442250413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976992.4438476562,
            "unit": "ns",
            "range": "± 15944.445928705161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3791493.6170212766,
            "unit": "ns",
            "range": "± 145924.62378891744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4201336.956521739,
            "unit": "ns",
            "range": "± 160115.8807568175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5113673.469387755,
            "unit": "ns",
            "range": "± 173730.71089033913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4737121.052631579,
            "unit": "ns",
            "range": "± 99774.03124030582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7471539.130434782,
            "unit": "ns",
            "range": "± 129457.25773794093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326036.2068965517,
            "unit": "ns",
            "range": "± 13648.207880245953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313037.8048780488,
            "unit": "ns",
            "range": "± 11247.470718387116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280872.1649484536,
            "unit": "ns",
            "range": "± 22216.827998295386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4943803.846153846,
            "unit": "ns",
            "range": "± 124488.20741184839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4456260.606060606,
            "unit": "ns",
            "range": "± 138462.98002398046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24569.791666666668,
            "unit": "ns",
            "range": "± 3314.8666653082637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98939.75903614458,
            "unit": "ns",
            "range": "± 5271.875210388734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85343.75,
            "unit": "ns",
            "range": "± 6006.37928416639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116093.93939393939,
            "unit": "ns",
            "range": "± 20279.077476611503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6375.257731958763,
            "unit": "ns",
            "range": "± 1082.0534998937449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24081.91489361702,
            "unit": "ns",
            "range": "± 2906.4245768015403"
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
          "id": "50d76b09787bcfbbce44883cd1e84b8eed45b411",
          "message": "Changelog",
          "timestamp": "2023-07-21T15:02:33+09:00",
          "tree_id": "16f0b3f1016715998210b35b2779d961ca82a04d",
          "url": "https://github.com/greymistcube/libplanet/commit/50d76b09787bcfbbce44883cd1e84b8eed45b411"
        },
        "date": 1689920771172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716764.2105263157,
            "unit": "ns",
            "range": "± 194015.5323436593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3381556.989247312,
            "unit": "ns",
            "range": "± 269986.1519789526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2253303.125,
            "unit": "ns",
            "range": "± 352816.37163742096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5728067.676767677,
            "unit": "ns",
            "range": "± 703084.5066095137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70153.125,
            "unit": "ns",
            "range": "± 16439.246705273392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8389000,
            "unit": "ns",
            "range": "± 686620.9256609905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21052171.717171717,
            "unit": "ns",
            "range": "± 1575067.9956842035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66280183.050847456,
            "unit": "ns",
            "range": "± 2894131.8364838106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131045112,
            "unit": "ns",
            "range": "± 6565294.022582855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238328482,
            "unit": "ns",
            "range": "± 21063640.914721247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5874891.50390625,
            "unit": "ns",
            "range": "± 177690.34888174146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908537.0198567708,
            "unit": "ns",
            "range": "± 74663.32991484254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1526826.81640625,
            "unit": "ns",
            "range": "± 34936.3618059345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3291758.8448660714,
            "unit": "ns",
            "range": "± 130972.49427233898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1080115.0669642857,
            "unit": "ns",
            "range": "± 13927.697116105288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1000640.2213541666,
            "unit": "ns",
            "range": "± 13787.754841450995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501869.8924731184,
            "unit": "ns",
            "range": "± 316207.51537453395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3544767.7419354836,
            "unit": "ns",
            "range": "± 338056.31096444454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601384.375,
            "unit": "ns",
            "range": "± 382219.7605203541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3926071.717171717,
            "unit": "ns",
            "range": "± 364837.73525975924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8264459.493670886,
            "unit": "ns",
            "range": "± 429237.664583592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319143.8775510204,
            "unit": "ns",
            "range": "± 52602.08742345154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305850.5154639175,
            "unit": "ns",
            "range": "± 51573.33799978301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305511.7021276596,
            "unit": "ns",
            "range": "± 34406.93261721206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4810244.897959184,
            "unit": "ns",
            "range": "± 508725.0143559217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4778930.357142857,
            "unit": "ns",
            "range": "± 182623.0991260842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24046,
            "unit": "ns",
            "range": "± 9037.591750376017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102053.53535353535,
            "unit": "ns",
            "range": "± 23158.91115629502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136262.88659793814,
            "unit": "ns",
            "range": "± 22288.297188900637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125629.16666666667,
            "unit": "ns",
            "range": "± 35876.38401266997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6825.274725274725,
            "unit": "ns",
            "range": "± 2210.7612266966335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28992.78350515464,
            "unit": "ns",
            "range": "± 8339.804746698714"
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
          "id": "a1789eee1e45ac2ab3c9b7d4d2c4faac6c5ffbcc",
          "message": "Suggestions",
          "timestamp": "2023-07-21T16:16:08+09:00",
          "tree_id": "dded0e0f3a9caf1cded5129b995f166051aecf4a",
          "url": "https://github.com/greymistcube/libplanet/commit/a1789eee1e45ac2ab3c9b7d4d2c4faac6c5ffbcc"
        },
        "date": 1689924619802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341380.808080808,
            "unit": "ns",
            "range": "± 110675.20570807184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2388880.9523809524,
            "unit": "ns",
            "range": "± 81636.52410143104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701724.7422680412,
            "unit": "ns",
            "range": "± 127772.26814314324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4375800,
            "unit": "ns",
            "range": "± 134923.58649824123"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43874.1935483871,
            "unit": "ns",
            "range": "± 2013.6978043318243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6705700,
            "unit": "ns",
            "range": "± 15050.883392980324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17630280,
            "unit": "ns",
            "range": "± 139469.26031003596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44720500,
            "unit": "ns",
            "range": "± 312655.74861636106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88771746.66666667,
            "unit": "ns",
            "range": "± 1050298.822013911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178558393.33333334,
            "unit": "ns",
            "range": "± 1981216.3585126423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4836510.703125,
            "unit": "ns",
            "range": "± 9774.68637729181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555527.2135416667,
            "unit": "ns",
            "range": "± 2996.0270429510333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166535.6640625,
            "unit": "ns",
            "range": "± 1299.408272436693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546493.0208333335,
            "unit": "ns",
            "range": "± 6148.2709252646255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805655.6119791666,
            "unit": "ns",
            "range": "± 660.3050856029685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731854.8567708334,
            "unit": "ns",
            "range": "± 957.6965357606049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2960873.076923077,
            "unit": "ns",
            "range": "± 78174.02411385669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3172778.947368421,
            "unit": "ns",
            "range": "± 70380.3285249142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050211.5384615385,
            "unit": "ns",
            "range": "± 56572.88128985387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3393380.5970149254,
            "unit": "ns",
            "range": "± 149353.49184706362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5857932.258064516,
            "unit": "ns",
            "range": "± 158237.40052443728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252360.65573770492,
            "unit": "ns",
            "range": "± 11220.164566358859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238007.01754385966,
            "unit": "ns",
            "range": "± 9475.831279951923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215017.3076923077,
            "unit": "ns",
            "range": "± 8664.95581500668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3952320,
            "unit": "ns",
            "range": "± 65128.9841117499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3510460,
            "unit": "ns",
            "range": "± 37114.837233337596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16816.666666666668,
            "unit": "ns",
            "range": "± 1402.198067424804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79090.36144578313,
            "unit": "ns",
            "range": "± 4226.473316730159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66866.66666666667,
            "unit": "ns",
            "range": "± 1686.4335062535056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81079.21348314607,
            "unit": "ns",
            "range": "± 8897.193150947702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3973.3333333333335,
            "unit": "ns",
            "range": "± 527.1931185719924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16578.72340425532,
            "unit": "ns",
            "range": "± 1339.9464232930407"
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
          "id": "80b4c83da5527d758a1adc1cde4bc2c02ec2736a",
          "message": "Suggestions",
          "timestamp": "2023-07-21T16:15:46+09:00",
          "tree_id": "7bf67711de078c5d39016d8dea5d12d1e87eb049",
          "url": "https://github.com/greymistcube/libplanet/commit/80b4c83da5527d758a1adc1cde4bc2c02ec2736a"
        },
        "date": 1689924915329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1938742.857142857,
            "unit": "ns",
            "range": "± 29263.280069731765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3233482.8767123288,
            "unit": "ns",
            "range": "± 154214.16120194897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248241.836734694,
            "unit": "ns",
            "range": "± 195654.1304115686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5882865.384615385,
            "unit": "ns",
            "range": "± 241267.54970983235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55240.86021505376,
            "unit": "ns",
            "range": "± 3845.7553269280675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8932947.368421054,
            "unit": "ns",
            "range": "± 187296.19847960686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24587464.285714287,
            "unit": "ns",
            "range": "± 258460.51508333505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61541335.71428572,
            "unit": "ns",
            "range": "± 736706.2055132685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124378073.33333333,
            "unit": "ns",
            "range": "± 3237691.7835815167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249221360.52631578,
            "unit": "ns",
            "range": "± 5374873.011408914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5976007.395833333,
            "unit": "ns",
            "range": "± 105011.48908757632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905764.3424479167,
            "unit": "ns",
            "range": "± 29130.542704142776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402284.3229166667,
            "unit": "ns",
            "range": "± 23987.30149037142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296373.7444196427,
            "unit": "ns",
            "range": "± 42980.248398194235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061132.96875,
            "unit": "ns",
            "range": "± 17393.58127370975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948547.1484375,
            "unit": "ns",
            "range": "± 11288.26782170246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3997810,
            "unit": "ns",
            "range": "± 81960.32352046292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4245466.666666667,
            "unit": "ns",
            "range": "± 68636.88790258762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5121385,
            "unit": "ns",
            "range": "± 113782.2679506785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4650880,
            "unit": "ns",
            "range": "± 176421.94591376663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7538519.565217392,
            "unit": "ns",
            "range": "± 224473.51204250284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317254.71698113205,
            "unit": "ns",
            "range": "± 13126.434955078183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303148.14814814815,
            "unit": "ns",
            "range": "± 7916.845252146763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277793.58974358975,
            "unit": "ns",
            "range": "± 14344.303722525166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4984923.076923077,
            "unit": "ns",
            "range": "± 63730.08386738237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4598457.692307692,
            "unit": "ns",
            "range": "± 36617.76575967968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25032.978723404256,
            "unit": "ns",
            "range": "± 1696.1936069419114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106463.84615384616,
            "unit": "ns",
            "range": "± 4774.930527082204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91912.08791208791,
            "unit": "ns",
            "range": "± 5762.461572102965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112696.8085106383,
            "unit": "ns",
            "range": "± 12366.816961040695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6211.458333333333,
            "unit": "ns",
            "range": "± 886.8477341171774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24316.666666666668,
            "unit": "ns",
            "range": "± 1503.1240875163671"
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
          "id": "80d80b07f386d47724b8f608c41b63b1863afa0e",
          "message": "Changelog",
          "timestamp": "2023-07-21T16:16:40+09:00",
          "tree_id": "77a8faa1ebc3e13f4309edf118475025bff5107f",
          "url": "https://github.com/greymistcube/libplanet/commit/80d80b07f386d47724b8f608c41b63b1863afa0e"
        },
        "date": 1689925207021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1769411.4583333333,
            "unit": "ns",
            "range": "± 211615.24040717795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3321718.556701031,
            "unit": "ns",
            "range": "± 295901.373042993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2293347.777777778,
            "unit": "ns",
            "range": "± 215092.38476471056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6433386.021505376,
            "unit": "ns",
            "range": "± 502507.84410736745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66729.03225806452,
            "unit": "ns",
            "range": "± 16742.049252816418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8991135.416666666,
            "unit": "ns",
            "range": "± 984648.824278742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25222522.44897959,
            "unit": "ns",
            "range": "± 1946334.3670624462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64093475.384615384,
            "unit": "ns",
            "range": "± 2954395.4219217366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133456519.23076923,
            "unit": "ns",
            "range": "± 3629618.0019411664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268766985.71428573,
            "unit": "ns",
            "range": "± 4614361.941366766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6100452.573529412,
            "unit": "ns",
            "range": "± 118667.36472556296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1973034.5572916667,
            "unit": "ns",
            "range": "± 30346.86291808287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1513590.5184659092,
            "unit": "ns",
            "range": "± 36688.79965804604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3308120.0730846776,
            "unit": "ns",
            "range": "± 100122.47502379125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092103.0989583333,
            "unit": "ns",
            "range": "± 18278.903344214683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996667.7873883928,
            "unit": "ns",
            "range": "± 13067.545143687377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3817784.536082474,
            "unit": "ns",
            "range": "± 381222.5064786657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4174345.1612903224,
            "unit": "ns",
            "range": "± 396447.6950302658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5308725.263157895,
            "unit": "ns",
            "range": "± 361183.1635788905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4472342.857142857,
            "unit": "ns",
            "range": "± 384283.7013103516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8134184.946236559,
            "unit": "ns",
            "range": "± 518771.06493558345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351444.6808510638,
            "unit": "ns",
            "range": "± 38122.1681254519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336152.688172043,
            "unit": "ns",
            "range": "± 38774.91791093222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277933.67346938775,
            "unit": "ns",
            "range": "± 54565.58891447063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5042970.9677419355,
            "unit": "ns",
            "range": "± 398810.20073862677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4622826.804123712,
            "unit": "ns",
            "range": "± 410849.7478588999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32350,
            "unit": "ns",
            "range": "± 7010.6792578118975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135211.57894736843,
            "unit": "ns",
            "range": "± 20196.670586994085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135892.22222222222,
            "unit": "ns",
            "range": "± 24343.197964545943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146922.91666666666,
            "unit": "ns",
            "range": "± 30258.971628842384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9490.588235294117,
            "unit": "ns",
            "range": "± 1540.6108505125774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31246.315789473683,
            "unit": "ns",
            "range": "± 9081.250388719627"
          }
        ]
      }
    ]
  }
}