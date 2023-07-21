window.BENCHMARK_DATA = {
  "lastUpdate": 1689920511642,
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
      }
    ]
  }
}