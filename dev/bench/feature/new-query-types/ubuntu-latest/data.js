window.BENCHMARK_DATA = {
  "lastUpdate": 1702796544805,
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
          "id": "5e119e4c89abc2575593bef0141eab83e735888b",
          "message": "Updated PublicKeyType",
          "timestamp": "2023-12-12T23:19:39+09:00",
          "tree_id": "10154c1d6706819011527e83383a4d02d77757be",
          "url": "https://github.com/greymistcube/libplanet/commit/5e119e4c89abc2575593bef0141eab83e735888b"
        },
        "date": 1702391452531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193894.85714285713,
            "unit": "ns",
            "range": "± 5532.103656778133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187573.33333333334,
            "unit": "ns",
            "range": "± 6980.9232392805525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166667.1052631579,
            "unit": "ns",
            "range": "± 3664.146844685022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047201.7,
            "unit": "ns",
            "range": "± 45256.68365351449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860663.6,
            "unit": "ns",
            "range": "± 44778.997948336706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12231.79381443299,
            "unit": "ns",
            "range": "± 1230.6453501630788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65153.7311827957,
            "unit": "ns",
            "range": "± 6328.183778764758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80763.5,
            "unit": "ns",
            "range": "± 18819.05125427717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59565.77319587629,
            "unit": "ns",
            "range": "± 13345.95066123769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3174.7263157894736,
            "unit": "ns",
            "range": "± 633.2704615656737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15297.957894736843,
            "unit": "ns",
            "range": "± 2706.7047560652345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41071.82474226804,
            "unit": "ns",
            "range": "± 5674.273710885658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956562.347368421,
            "unit": "ns",
            "range": "± 92615.24027230723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884598.2272727273,
            "unit": "ns",
            "range": "± 88808.40762048385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432990.3505154639,
            "unit": "ns",
            "range": "± 127779.01642297023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6195284.821052631,
            "unit": "ns",
            "range": "± 383279.48797267413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415772.3529411764,
            "unit": "ns",
            "range": "± 47461.29943298695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2595850.111111111,
            "unit": "ns",
            "range": "± 98699.9738054267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3107995.3333333335,
            "unit": "ns",
            "range": "± 43183.058964816555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939606.1,
            "unit": "ns",
            "range": "± 154515.0255638744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6969178.857142857,
            "unit": "ns",
            "range": "± 199424.31252848866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666477.466666667,
            "unit": "ns",
            "range": "± 31600.183584156293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14447532.92857143,
            "unit": "ns",
            "range": "± 192171.1124654933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36251735.461538464,
            "unit": "ns",
            "range": "± 216614.23268397956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74890063.66666667,
            "unit": "ns",
            "range": "± 758786.4540834422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150593078,
            "unit": "ns",
            "range": "± 879127.6513613454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3683866.3689903845,
            "unit": "ns",
            "range": "± 10525.337538698557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216150.7127403845,
            "unit": "ns",
            "range": "± 3486.7221303479078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766905.7909342448,
            "unit": "ns",
            "range": "± 4828.42682366476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947490.4396033655,
            "unit": "ns",
            "range": "± 11577.425376895462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616706.6686197916,
            "unit": "ns",
            "range": "± 1019.1324203232584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575413.6629231771,
            "unit": "ns",
            "range": "± 810.6597879750445"
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
          "id": "65bb38b9639f64f14feed57d2591029fec102d2d",
          "message": "Changelog",
          "timestamp": "2023-12-12T23:22:30+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/65bb38b9639f64f14feed57d2591029fec102d2d"
        },
        "date": 1702391615065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233873.4010989011,
            "unit": "ns",
            "range": "± 17794.12283502302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226260.58666666667,
            "unit": "ns",
            "range": "± 11430.88640138819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177155.92857142858,
            "unit": "ns",
            "range": "± 7594.306271165243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3181686.785714286,
            "unit": "ns",
            "range": "± 34239.32088747037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798719.5,
            "unit": "ns",
            "range": "± 28033.367814088982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13255.2,
            "unit": "ns",
            "range": "± 1042.4257600273218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64073.936170212764,
            "unit": "ns",
            "range": "± 7514.552981515999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63340.12,
            "unit": "ns",
            "range": "± 1682.248329864926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72005.09183673469,
            "unit": "ns",
            "range": "± 12410.629761376063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5025.183673469388,
            "unit": "ns",
            "range": "± 1770.8043273937028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12664.52688172043,
            "unit": "ns",
            "range": "± 1322.728237816576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40070.4381443299,
            "unit": "ns",
            "range": "± 5885.348224642335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963222.6153846154,
            "unit": "ns",
            "range": "± 55897.703055526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924237.9574468085,
            "unit": "ns",
            "range": "± 109468.84702050246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1486341.085106383,
            "unit": "ns",
            "range": "± 107670.9834233324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6100096.559322034,
            "unit": "ns",
            "range": "± 267982.3093834593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2580485.2666666666,
            "unit": "ns",
            "range": "± 46480.792497649214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2612991.466666667,
            "unit": "ns",
            "range": "± 98507.91200147787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3332985.8125,
            "unit": "ns",
            "range": "± 57012.20920553626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3136787.3174603176,
            "unit": "ns",
            "range": "± 137105.42824573352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7197627.055555556,
            "unit": "ns",
            "range": "± 233724.7356958846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5714273.75,
            "unit": "ns",
            "range": "± 56915.248816471925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15046575.2,
            "unit": "ns",
            "range": "± 100689.89249685674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36884950.266666666,
            "unit": "ns",
            "range": "± 189297.71123605673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75802806.42857143,
            "unit": "ns",
            "range": "± 531853.7150347127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151103979.7142857,
            "unit": "ns",
            "range": "± 747440.9156528879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710911.3828125,
            "unit": "ns",
            "range": "± 9741.131406018609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194527.6280048077,
            "unit": "ns",
            "range": "± 6454.939669114808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 791216.2312360491,
            "unit": "ns",
            "range": "± 5359.094235251599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1985388.1228966345,
            "unit": "ns",
            "range": "± 11762.156516187499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623416.3450753348,
            "unit": "ns",
            "range": "± 596.1380471920792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590365.226938101,
            "unit": "ns",
            "range": "± 2130.115646366151"
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
          "id": "58ea35e612a35ec1856f95fef54cd68e2bb427b2",
          "message": "Changelog",
          "timestamp": "2023-12-17T15:51:31+09:00",
          "tree_id": "ced10db146ba60c319cd2347c1b6826f3177683c",
          "url": "https://github.com/greymistcube/libplanet/commit/58ea35e612a35ec1856f95fef54cd68e2bb427b2"
        },
        "date": 1702796538748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756703.1651785714,
            "unit": "ns",
            "range": "± 47902.72534939691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198511.8369891827,
            "unit": "ns",
            "range": "± 5131.945536074065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780646.5532602164,
            "unit": "ns",
            "range": "± 4439.251562757398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950334.55078125,
            "unit": "ns",
            "range": "± 8594.83063012762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613260.4276592548,
            "unit": "ns",
            "range": "± 2886.6551656061156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 607926.3891601562,
            "unit": "ns",
            "range": "± 1945.157004511191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362242.761904762,
            "unit": "ns",
            "range": "± 54266.86216458877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2426855.96875,
            "unit": "ns",
            "range": "± 111940.10076297236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3124316.125,
            "unit": "ns",
            "range": "± 80950.83317094798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917307.25,
            "unit": "ns",
            "range": "± 128857.49443903498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776775.148148148,
            "unit": "ns",
            "range": "± 181818.25837647365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38841.051020408166,
            "unit": "ns",
            "range": "± 5331.473535935482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193417.98113207548,
            "unit": "ns",
            "range": "± 8038.093001190704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192843.5,
            "unit": "ns",
            "range": "± 6698.538148979473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165443.9642857143,
            "unit": "ns",
            "range": "± 4748.537267818631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3028320.1666666665,
            "unit": "ns",
            "range": "± 25281.10478322904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705290.2916666665,
            "unit": "ns",
            "range": "± 68559.56724565312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11870.566666666668,
            "unit": "ns",
            "range": "± 973.5371399804675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63920.152631578945,
            "unit": "ns",
            "range": "± 4428.789385442109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51299.666666666664,
            "unit": "ns",
            "range": "± 1532.3501520559023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56794.63157894737,
            "unit": "ns",
            "range": "± 10080.409321363204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2602.6736842105265,
            "unit": "ns",
            "range": "± 311.02792657351955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13987.652631578947,
            "unit": "ns",
            "range": "± 2894.867037583169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5579707.533333333,
            "unit": "ns",
            "range": "± 22319.28696655066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13892599.454545455,
            "unit": "ns",
            "range": "± 324168.3821776706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36255499.71428572,
            "unit": "ns",
            "range": "± 356426.06431120273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72850765.35714285,
            "unit": "ns",
            "range": "± 577737.758626878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149782358.16666666,
            "unit": "ns",
            "range": "± 689968.7814590973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933217.8791208791,
            "unit": "ns",
            "range": "± 70097.76783969265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819141.6875,
            "unit": "ns",
            "range": "± 33523.73492859201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1389933.8350515463,
            "unit": "ns",
            "range": "± 109189.23657078116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6158881.35106383,
            "unit": "ns",
            "range": "± 365070.2246526696"
          }
        ]
      }
    ]
  }
}