window.BENCHMARK_DATA = {
  "lastUpdate": 1692335698626,
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
          "id": "b327162b0138de3d8d4152ec0c253021c659619a",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:06:35+09:00",
          "tree_id": "1dff3457ca856391c36cd0caec5a2543921a250f",
          "url": "https://github.com/greymistcube/libplanet/commit/b327162b0138de3d8d4152ec0c253021c659619a"
        },
        "date": 1692332507451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346870,
            "unit": "ns",
            "range": "± 115400.71468364028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415233.3333333335,
            "unit": "ns",
            "range": "± 119267.76124854293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683417.3469387756,
            "unit": "ns",
            "range": "± 131600.50451561724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4262997.5,
            "unit": "ns",
            "range": "± 142301.09732985916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45888.88888888889,
            "unit": "ns",
            "range": "± 2567.359700200234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7023366.666666667,
            "unit": "ns",
            "range": "± 47244.75279506356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17897353.333333332,
            "unit": "ns",
            "range": "± 69198.89415576633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46619920,
            "unit": "ns",
            "range": "± 238514.92376189557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92700793.33333333,
            "unit": "ns",
            "range": "± 669912.4329414434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185780140,
            "unit": "ns",
            "range": "± 1432946.680196341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4301368.569711538,
            "unit": "ns",
            "range": "± 5052.68420054095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393900.48828125,
            "unit": "ns",
            "range": "± 2377.880382757404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1040330.4817708334,
            "unit": "ns",
            "range": "± 1031.9992196540234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543172.421875,
            "unit": "ns",
            "range": "± 3507.8938299661313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801450.2790178572,
            "unit": "ns",
            "range": "± 1412.5968919905854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716886.3151041666,
            "unit": "ns",
            "range": "± 961.1183865467201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072418.75,
            "unit": "ns",
            "range": "± 44577.81539061778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3195406.25,
            "unit": "ns",
            "range": "± 124078.13325318747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3918072.222222222,
            "unit": "ns",
            "range": "± 82160.2365936478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3561466.6666666665,
            "unit": "ns",
            "range": "± 51763.63404479838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5730264.285714285,
            "unit": "ns",
            "range": "± 139616.4911576516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260110.52631578947,
            "unit": "ns",
            "range": "± 11261.164051263693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242222.5806451613,
            "unit": "ns",
            "range": "± 11005.012559184834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220416.32653061225,
            "unit": "ns",
            "range": "± 14279.432934231192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3800807.6923076925,
            "unit": "ns",
            "range": "± 20566.536798825317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3484821.4285714286,
            "unit": "ns",
            "range": "± 35597.8430325691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18940.816326530614,
            "unit": "ns",
            "range": "± 1844.9058721941535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82768.08510638298,
            "unit": "ns",
            "range": "± 5205.150732036169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65108.19672131148,
            "unit": "ns",
            "range": "± 2943.1442983067845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72980.89887640449,
            "unit": "ns",
            "range": "± 9137.981132768859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4346.590909090909,
            "unit": "ns",
            "range": "± 485.7625510559243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18398.989898989897,
            "unit": "ns",
            "range": "± 1925.7383926794898"
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
          "id": "e308ec59605017506ac6455c471c3ff973ffd035",
          "message": "Changelog",
          "timestamp": "2023-08-18T13:09:35+09:00",
          "tree_id": "faa628bbaaf525b8cfdb32ff2ab8dc2dd3577a12",
          "url": "https://github.com/greymistcube/libplanet/commit/e308ec59605017506ac6455c471c3ff973ffd035"
        },
        "date": 1692332683683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344696.9696969697,
            "unit": "ns",
            "range": "± 120635.99359190953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460093.220338983,
            "unit": "ns",
            "range": "± 108877.29231033404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1869188.4615384615,
            "unit": "ns",
            "range": "± 27521.099132045896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4345862.5,
            "unit": "ns",
            "range": "± 163189.55904361978"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44656.818181818184,
            "unit": "ns",
            "range": "± 2460.4361567625974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7002620,
            "unit": "ns",
            "range": "± 31054.426875590998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17805928.57142857,
            "unit": "ns",
            "range": "± 78740.36623438625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45993406.666666664,
            "unit": "ns",
            "range": "± 393189.33909880155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92135500,
            "unit": "ns",
            "range": "± 611250.6874083193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182945353.33333334,
            "unit": "ns",
            "range": "± 873434.5489148545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4290664.423076923,
            "unit": "ns",
            "range": "± 4435.378318977641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396732.2005208333,
            "unit": "ns",
            "range": "± 2224.0240327641523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995273.3203125,
            "unit": "ns",
            "range": "± 1707.5043540313427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502978.828125,
            "unit": "ns",
            "range": "± 2655.1534969282434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807130.3059895834,
            "unit": "ns",
            "range": "± 948.9708471966117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726689.0399639423,
            "unit": "ns",
            "range": "± 568.4933906606102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2979973.529411765,
            "unit": "ns",
            "range": "± 61058.19487803996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151350,
            "unit": "ns",
            "range": "± 78227.52456776323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3989481.25,
            "unit": "ns",
            "range": "± 63823.801398851196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3503975,
            "unit": "ns",
            "range": "± 80620.72368167208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5640627.2727272725,
            "unit": "ns",
            "range": "± 155929.70225538992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248206.52173913043,
            "unit": "ns",
            "range": "± 8493.589796596621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239282.60869565216,
            "unit": "ns",
            "range": "± 7343.335734538148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209231,
            "unit": "ns",
            "range": "± 13077.011172745904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3751593.3333333335,
            "unit": "ns",
            "range": "± 36010.16655387885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3497970,
            "unit": "ns",
            "range": "± 24794.676848065596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18187.09677419355,
            "unit": "ns",
            "range": "± 1227.158772765952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83491.56626506025,
            "unit": "ns",
            "range": "± 4428.626523285805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66825.45454545454,
            "unit": "ns",
            "range": "± 2856.585515625395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76498.3870967742,
            "unit": "ns",
            "range": "± 10498.784742336547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4484.693877551021,
            "unit": "ns",
            "range": "± 610.2816724725916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19321.428571428572,
            "unit": "ns",
            "range": "± 1923.8733481686925"
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
          "id": "fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c",
          "message": "Fix node equality for INode",
          "timestamp": "2023-08-18T13:03:47+09:00",
          "tree_id": "f8d4e920eefba0d306e903ac9034f3c4cc0c3174",
          "url": "https://github.com/greymistcube/libplanet/commit/fc4efbf3497e7ef0a7aa3a5aa4b0c0e70a36996c"
        },
        "date": 1692332718966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628407.2916666667,
            "unit": "ns",
            "range": "± 144426.42581116423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3135092.1052631577,
            "unit": "ns",
            "range": "± 156979.93652112182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055657.4468085107,
            "unit": "ns",
            "range": "± 164909.4828219224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5427023.076923077,
            "unit": "ns",
            "range": "± 224038.60190442202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56579.77528089887,
            "unit": "ns",
            "range": "± 3346.8159826400292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9420278.846153846,
            "unit": "ns",
            "range": "± 388749.943994215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25653629.411764707,
            "unit": "ns",
            "range": "± 438544.177883919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65289421.21212121,
            "unit": "ns",
            "range": "± 2043868.6063072851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129112570.37037037,
            "unit": "ns",
            "range": "± 3580677.551892488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255772130,
            "unit": "ns",
            "range": "± 5364341.339673149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5685153.571428572,
            "unit": "ns",
            "range": "± 79421.55256004949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790656.38671875,
            "unit": "ns",
            "range": "± 39799.41680398693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1319214.8567708333,
            "unit": "ns",
            "range": "± 23847.040247564437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3265124.581473214,
            "unit": "ns",
            "range": "± 32169.05383059487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062443.106617647,
            "unit": "ns",
            "range": "± 21192.77508931012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952406.1465992647,
            "unit": "ns",
            "range": "± 19098.788569591088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4128242.8571428573,
            "unit": "ns",
            "range": "± 59965.8552111849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4195805.9701492535,
            "unit": "ns",
            "range": "± 197658.3054703066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5150161.29032258,
            "unit": "ns",
            "range": "± 152013.49650040804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4535837.755102041,
            "unit": "ns",
            "range": "± 179127.173902432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7212309.375,
            "unit": "ns",
            "range": "± 218948.3712296415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308688.23529411765,
            "unit": "ns",
            "range": "± 12518.093258301338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297168.4210526316,
            "unit": "ns",
            "range": "± 6520.314633817651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267310,
            "unit": "ns",
            "range": "± 11843.537893320074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4973273.684210527,
            "unit": "ns",
            "range": "± 93073.21993466138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4740560,
            "unit": "ns",
            "range": "± 107965.69825643698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26338.947368421053,
            "unit": "ns",
            "range": "± 2059.4512146955767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102716.12903225806,
            "unit": "ns",
            "range": "± 6498.750554204893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86885.45454545454,
            "unit": "ns",
            "range": "± 3719.041004515276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100763.82978723405,
            "unit": "ns",
            "range": "± 16100.508247262831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6578.125,
            "unit": "ns",
            "range": "± 954.0167851331493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24233.684210526317,
            "unit": "ns",
            "range": "± 2226.1793683499964"
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
          "id": "b2170cb6de33d05d5d46f8d5ab7d278e14394ea8",
          "message": "Fix FullNode equality",
          "timestamp": "2023-08-18T13:59:27+09:00",
          "tree_id": "fdc59496aa611b4c22af88ff97abb9b64ee66f32",
          "url": "https://github.com/greymistcube/libplanet/commit/b2170cb6de33d05d5d46f8d5ab7d278e14394ea8"
        },
        "date": 1692335674275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334622.2222222222,
            "unit": "ns",
            "range": "± 27319.343622197666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2349354.5454545454,
            "unit": "ns",
            "range": "± 96982.85609892286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640667,
            "unit": "ns",
            "range": "± 118841.34747509795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4209912.962962963,
            "unit": "ns",
            "range": "± 177455.61448376303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43802.63157894737,
            "unit": "ns",
            "range": "± 2237.437443994686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6913840,
            "unit": "ns",
            "range": "± 44181.53783781508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17493353.333333332,
            "unit": "ns",
            "range": "± 142687.1145782501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45351840,
            "unit": "ns",
            "range": "± 227881.6948707001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89360753.33333333,
            "unit": "ns",
            "range": "± 666786.9405554056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179949763.33333334,
            "unit": "ns",
            "range": "± 1141914.4769494196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4281322.916666667,
            "unit": "ns",
            "range": "± 2873.078334532301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383059.4205729167,
            "unit": "ns",
            "range": "± 1806.1116842530198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 997915.2473958334,
            "unit": "ns",
            "range": "± 1137.2761396011122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539232.3381696427,
            "unit": "ns",
            "range": "± 1385.2040428922305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798831.7643229166,
            "unit": "ns",
            "range": "± 813.5512896854174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724062.1354166666,
            "unit": "ns",
            "range": "± 825.269911293746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937260,
            "unit": "ns",
            "range": "± 32470.15772762958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3048348,
            "unit": "ns",
            "range": "± 76430.1539533536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3830486.3636363638,
            "unit": "ns",
            "range": "± 92385.35389724182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3254976.470588235,
            "unit": "ns",
            "range": "± 69109.49177813741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5386352.173913044,
            "unit": "ns",
            "range": "± 88343.31208707218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241734.375,
            "unit": "ns",
            "range": "± 7131.330662374942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228525.64102564103,
            "unit": "ns",
            "range": "± 7173.845696575346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200062.8205128205,
            "unit": "ns",
            "range": "± 6829.779201454523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3716350,
            "unit": "ns",
            "range": "± 41437.75220366457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3302366.6666666665,
            "unit": "ns",
            "range": "± 35554.39829465882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16808.42105263158,
            "unit": "ns",
            "range": "± 1360.7462875666938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77779.10447761194,
            "unit": "ns",
            "range": "± 3686.031672262061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62879.31034482759,
            "unit": "ns",
            "range": "± 1657.963318210635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71646.46464646465,
            "unit": "ns",
            "range": "± 12246.826437159165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3997.9166666666665,
            "unit": "ns",
            "range": "± 478.1497599941426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16609.375,
            "unit": "ns",
            "range": "± 1627.0786300671066"
          }
        ]
      }
    ]
  }
}