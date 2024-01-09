window.BENCHMARK_DATA = {
  "lastUpdate": 1704760629044,
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
          "id": "47423efb53fe7d199ca1c6a6c65d71408d84ba05",
          "message": "Removed arguments to redirect to legacy by default; removed GetAccountState()",
          "timestamp": "2024-01-06T19:37:09+09:00",
          "tree_id": "8d0db7b7b7b68a376e7c8289e76431a2128dd358",
          "url": "https://github.com/greymistcube/libplanet/commit/47423efb53fe7d199ca1c6a6c65d71408d84ba05"
        },
        "date": 1704594559634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067638.775510204,
            "unit": "ns",
            "range": "± 161019.77315515873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1838117.391304348,
            "unit": "ns",
            "range": "± 104346.39334499747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672866.6666666667,
            "unit": "ns",
            "range": "± 190905.75621259309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11057084.269662922,
            "unit": "ns",
            "range": "± 971030.6142654071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35923.59550561798,
            "unit": "ns",
            "range": "± 2715.7797504044474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5023326.666666667,
            "unit": "ns",
            "range": "± 50255.43988560082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13891592.307692308,
            "unit": "ns",
            "range": "± 112998.18185512589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34621707.692307696,
            "unit": "ns",
            "range": "± 293635.33070102014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68732921.42857143,
            "unit": "ns",
            "range": "± 337269.6642578034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136937885.7142857,
            "unit": "ns",
            "range": "± 1316551.1200493874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310595.3962053573,
            "unit": "ns",
            "range": "± 8099.77374135398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083401.2109375,
            "unit": "ns",
            "range": "± 4318.899076269395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745922.5795200893,
            "unit": "ns",
            "range": "± 845.0485636929674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964221.9075520833,
            "unit": "ns",
            "range": "± 2255.7013728507877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631650.3278459822,
            "unit": "ns",
            "range": "± 2172.6227467055755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553446.0111177885,
            "unit": "ns",
            "range": "± 1261.0349147790575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2290450,
            "unit": "ns",
            "range": "± 91930.39323314134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2398433.3333333335,
            "unit": "ns",
            "range": "± 37881.46298778913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2936612,
            "unit": "ns",
            "range": "± 78057.09619673708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2931679.069767442,
            "unit": "ns",
            "range": "± 159303.84664775536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12393491.011235954,
            "unit": "ns",
            "range": "± 1515254.1890449547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181504,
            "unit": "ns",
            "range": "± 6908.615148154232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176024.05063291139,
            "unit": "ns",
            "range": "± 9159.025465876975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151568.23529411765,
            "unit": "ns",
            "range": "± 8149.8643249692295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2907640,
            "unit": "ns",
            "range": "± 54182.98098638934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2608653.3333333335,
            "unit": "ns",
            "range": "± 36553.5979598387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13750.537634408602,
            "unit": "ns",
            "range": "± 2197.658024981118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61822.10526315789,
            "unit": "ns",
            "range": "± 5927.077765633383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55590.816326530614,
            "unit": "ns",
            "range": "± 6677.382763018337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72199.49494949495,
            "unit": "ns",
            "range": "± 16169.241231029337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3332.2916666666665,
            "unit": "ns",
            "range": "± 825.0671158239402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13142.222222222223,
            "unit": "ns",
            "range": "± 1646.4451169401698"
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
          "id": "74cdc54b8909688ab3000808a3bbdecc052476a8",
          "message": "Changelog",
          "timestamp": "2024-01-07T11:18:21+09:00",
          "tree_id": "63a306cd17f2b45b0a1dff2f1d00badac83d7391",
          "url": "https://github.com/greymistcube/libplanet/commit/74cdc54b8909688ab3000808a3bbdecc052476a8"
        },
        "date": 1704594860618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050894,
            "unit": "ns",
            "range": "± 123507.33983832457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1824286.5168539325,
            "unit": "ns",
            "range": "± 121437.28477827861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1693155.5555555555,
            "unit": "ns",
            "range": "± 210192.78770817787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11069255.555555556,
            "unit": "ns",
            "range": "± 751805.133297143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34004.444444444445,
            "unit": "ns",
            "range": "± 2033.1472868774972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5103942.857142857,
            "unit": "ns",
            "range": "± 51712.291564976105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13549735.714285715,
            "unit": "ns",
            "range": "± 154082.95771156152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32726978.57142857,
            "unit": "ns",
            "range": "± 322128.6846983586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67225753.33333333,
            "unit": "ns",
            "range": "± 960899.4282640067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135562256.66666666,
            "unit": "ns",
            "range": "± 888405.5022234792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3380917.7864583335,
            "unit": "ns",
            "range": "± 12690.101964603115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062299.9088541667,
            "unit": "ns",
            "range": "± 3893.4654622541325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742746.1588541666,
            "unit": "ns",
            "range": "± 2183.87854635079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909433.1770833333,
            "unit": "ns",
            "range": "± 6097.456979494996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639786.6536458334,
            "unit": "ns",
            "range": "± 3228.811051530444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573161.97265625,
            "unit": "ns",
            "range": "± 1983.1033554706194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2334471.794871795,
            "unit": "ns",
            "range": "± 81131.47208379206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309647.727272727,
            "unit": "ns",
            "range": "± 72339.80373222555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810940.909090909,
            "unit": "ns",
            "range": "± 58093.88672936831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2902955.882352941,
            "unit": "ns",
            "range": "± 92603.9045946096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12487453.409090908,
            "unit": "ns",
            "range": "± 1587103.7058764105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182947.0588235294,
            "unit": "ns",
            "range": "± 8677.892147053404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174300,
            "unit": "ns",
            "range": "± 7574.234763859945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147442.45283018867,
            "unit": "ns",
            "range": "± 5705.86233813704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809580.769230769,
            "unit": "ns",
            "range": "± 75991.26802063917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2489066.6666666665,
            "unit": "ns",
            "range": "± 43523.239550295206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11047.872340425532,
            "unit": "ns",
            "range": "± 1980.0471767706633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59188.50574712644,
            "unit": "ns",
            "range": "± 4188.756414424834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46283.75,
            "unit": "ns",
            "range": "± 2374.1457491010706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66737.37373737374,
            "unit": "ns",
            "range": "± 18251.7295007092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3158.1632653061224,
            "unit": "ns",
            "range": "± 656.7529418875013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12057.291666666666,
            "unit": "ns",
            "range": "± 2174.287289963828"
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
          "id": "077e3f72ba03285187d2f1c3071f9bd4014f72f2",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:23:39+09:00",
          "tree_id": "779d437ba8029b16cf2eb6d461e57fc93d041c3d",
          "url": "https://github.com/greymistcube/libplanet/commit/077e3f72ba03285187d2f1c3071f9bd4014f72f2"
        },
        "date": 1704760574325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028127.8350515463,
            "unit": "ns",
            "range": "± 96199.55251787389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2030277.4193548388,
            "unit": "ns",
            "range": "± 125255.67515480198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620539.7959183673,
            "unit": "ns",
            "range": "± 144241.89054358235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11056497.802197803,
            "unit": "ns",
            "range": "± 889116.3644600586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36026.96629213483,
            "unit": "ns",
            "range": "± 2194.6093069643407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5472173.333333333,
            "unit": "ns",
            "range": "± 64580.85150377301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13782314.285714285,
            "unit": "ns",
            "range": "± 151840.942118049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34253030.76923077,
            "unit": "ns",
            "range": "± 192673.330556391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69986857.14285715,
            "unit": "ns",
            "range": "± 365762.63996095717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136151666.66666666,
            "unit": "ns",
            "range": "± 718864.5179991118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319865.8954326925,
            "unit": "ns",
            "range": "± 10540.004215015984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068049.9739583333,
            "unit": "ns",
            "range": "± 2483.2295034664826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764360.400390625,
            "unit": "ns",
            "range": "± 1874.4453500885872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939786.7447916667,
            "unit": "ns",
            "range": "± 6592.138498450279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632529.9944196428,
            "unit": "ns",
            "range": "± 2083.7579351104455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578679.98046875,
            "unit": "ns",
            "range": "± 383.21697016963225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2320294.736842105,
            "unit": "ns",
            "range": "± 29362.645840595393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2420882.8571428573,
            "unit": "ns",
            "range": "± 69633.27672090949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2972413.0434782607,
            "unit": "ns",
            "range": "± 73263.36864880532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3559937.5,
            "unit": "ns",
            "range": "± 68911.49758929928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12518691.111111112,
            "unit": "ns",
            "range": "± 1501036.417051018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193580.8988764045,
            "unit": "ns",
            "range": "± 10657.01728274182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188311.53846153847,
            "unit": "ns",
            "range": "± 8021.235337911104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157026.5625,
            "unit": "ns",
            "range": "± 7222.654882492123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2902707.1428571427,
            "unit": "ns",
            "range": "± 30208.034190763385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2617926.6666666665,
            "unit": "ns",
            "range": "± 48902.12479559359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14453.333333333334,
            "unit": "ns",
            "range": "± 1587.5357202032803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65415.555555555555,
            "unit": "ns",
            "range": "± 6068.798654068239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50788.65979381443,
            "unit": "ns",
            "range": "± 3109.0551984170565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63639.53488372093,
            "unit": "ns",
            "range": "± 6970.716548023342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3508.6021505376343,
            "unit": "ns",
            "range": "± 711.0396420763195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12574.193548387097,
            "unit": "ns",
            "range": "± 1738.9341579283841"
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
          "id": "4ef421f019a4d18b6b904a749791f29e31fd9e43",
          "message": "Remove direct access to lower level data",
          "timestamp": "2024-01-09T09:24:36+09:00",
          "tree_id": "e2a7d595b94e704435fbe64917636259acd9f815",
          "url": "https://github.com/greymistcube/libplanet/commit/4ef421f019a4d18b6b904a749791f29e31fd9e43"
        },
        "date": 1704760611129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008740.8163265307,
            "unit": "ns",
            "range": "± 133252.65037632998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831339.189189189,
            "unit": "ns",
            "range": "± 78588.26782942523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518637.894736842,
            "unit": "ns",
            "range": "± 127095.32791766753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10976387.209302325,
            "unit": "ns",
            "range": "± 804285.6333120221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34884.88372093023,
            "unit": "ns",
            "range": "± 1907.848646226515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4907128.571428572,
            "unit": "ns",
            "range": "± 24628.702098019032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13522523.529411765,
            "unit": "ns",
            "range": "± 265344.0373586049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32951830.769230768,
            "unit": "ns",
            "range": "± 341404.4092290339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65854116.666666664,
            "unit": "ns",
            "range": "± 813758.9908800365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131417393.33333333,
            "unit": "ns",
            "range": "± 863257.5186604571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320352.3697916665,
            "unit": "ns",
            "range": "± 17480.713282324617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078380.0911458333,
            "unit": "ns",
            "range": "± 3510.676529185184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731689.4791666666,
            "unit": "ns",
            "range": "± 3551.3290495351484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1886674.140625,
            "unit": "ns",
            "range": "± 9301.049989707446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617546.4076450893,
            "unit": "ns",
            "range": "± 1830.9989952181809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576370.3683035715,
            "unit": "ns",
            "range": "± 863.2221568657723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2228288.4615384615,
            "unit": "ns",
            "range": "± 60805.054572284214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226950,
            "unit": "ns",
            "range": "± 78510.69436984227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2791716.6666666665,
            "unit": "ns",
            "range": "± 91905.42188265375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2832342.6315789474,
            "unit": "ns",
            "range": "± 208162.78217130696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12579700,
            "unit": "ns",
            "range": "± 1563589.8567079538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179902.5,
            "unit": "ns",
            "range": "± 9236.950768174034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164290.14084507042,
            "unit": "ns",
            "range": "± 7246.164599872867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141452.9411764706,
            "unit": "ns",
            "range": "± 2759.555590819567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2789150,
            "unit": "ns",
            "range": "± 34359.07113457477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2413914.285714286,
            "unit": "ns",
            "range": "± 27143.97105869303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10929.787234042553,
            "unit": "ns",
            "range": "± 1465.431771466869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56934.04255319149,
            "unit": "ns",
            "range": "± 6560.529633607226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44334.61538461538,
            "unit": "ns",
            "range": "± 1600.414727547466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59763.73626373626,
            "unit": "ns",
            "range": "± 13294.949053293523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2624.2105263157896,
            "unit": "ns",
            "range": "± 361.6498216576903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11284.782608695652,
            "unit": "ns",
            "range": "± 1687.37619212793"
          }
        ]
      }
    ]
  }
}