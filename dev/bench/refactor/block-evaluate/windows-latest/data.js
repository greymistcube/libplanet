window.BENCHMARK_DATA = {
  "lastUpdate": 1680477998797,
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
          "id": "70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T21:50:08+09:00",
          "tree_id": "7fe50a118abcde3a3dc3a20aa6b369c7ce345b0a",
          "url": "https://github.com/greymistcube/libplanet/commit/70bbfb2f984e84ee4571d9e3a68ad6a3cb0c3fc0"
        },
        "date": 1680267991215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323684,
            "unit": "ns",
            "range": "± 104481.436870408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2492268.5185185187,
            "unit": "ns",
            "range": "± 105008.80614298556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174058.163265306,
            "unit": "ns",
            "range": "± 186829.49221008504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5559572.448979592,
            "unit": "ns",
            "range": "± 403247.19179025193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48448.35164835165,
            "unit": "ns",
            "range": "± 2858.8405822937166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6723185.714285715,
            "unit": "ns",
            "range": "± 37432.19217450417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19492050,
            "unit": "ns",
            "range": "± 332542.1677522015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49893723.333333336,
            "unit": "ns",
            "range": "± 361169.9510255657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99217614.28571428,
            "unit": "ns",
            "range": "± 882448.4738561164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197944546.66666666,
            "unit": "ns",
            "range": "± 2745313.082813446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4823261.302083333,
            "unit": "ns",
            "range": "± 30838.716694984378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510449.58984375,
            "unit": "ns",
            "range": "± 9487.994638907403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154503.9518229167,
            "unit": "ns",
            "range": "± 5705.407078365899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674604.6316964286,
            "unit": "ns",
            "range": "± 14421.74139580541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830551.7122395834,
            "unit": "ns",
            "range": "± 3090.159911337133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776982.8500600961,
            "unit": "ns",
            "range": "± 4647.18588640808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3044166.6666666665,
            "unit": "ns",
            "range": "± 102207.53225238738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440526.3157894737,
            "unit": "ns",
            "range": "± 71867.48486010179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3985691.304347826,
            "unit": "ns",
            "range": "± 98248.74698735337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149181.8181818184,
            "unit": "ns",
            "range": "± 243854.48252111353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7189741.176470588,
            "unit": "ns",
            "range": "± 228015.99773440545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313790.625,
            "unit": "ns",
            "range": "± 14408.382907733714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252268.25396825396,
            "unit": "ns",
            "range": "± 11027.1340615719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206514.2857142857,
            "unit": "ns",
            "range": "± 3588.8410691726403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5343346.153846154,
            "unit": "ns",
            "range": "± 62674.79045816076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3593066.6666666665,
            "unit": "ns",
            "range": "± 57464.13374154932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21808.24742268041,
            "unit": "ns",
            "range": "± 2213.1552750491014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95051.54639175258,
            "unit": "ns",
            "range": "± 9075.230867151327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83560.82474226804,
            "unit": "ns",
            "range": "± 6385.050193959438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177043.8775510204,
            "unit": "ns",
            "range": "± 18049.765491388804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6419.3877551020405,
            "unit": "ns",
            "range": "± 1050.8374827280613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20864.646464646463,
            "unit": "ns",
            "range": "± 2084.8977428706603"
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
          "id": "9001bd0946b8b6dc35a0785c3f1aae063602f01b",
          "message": "Removed unnecessary code",
          "timestamp": "2023-03-31T22:04:01+09:00",
          "tree_id": "02d553f2e0cb0f162a8019a02314901ac94430c7",
          "url": "https://github.com/greymistcube/libplanet/commit/9001bd0946b8b6dc35a0785c3f1aae063602f01b"
        },
        "date": 1680268786469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329565.306122449,
            "unit": "ns",
            "range": "± 119906.70609006504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2383846,
            "unit": "ns",
            "range": "± 87489.3164556539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076720,
            "unit": "ns",
            "range": "± 152916.07654084795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970516,
            "unit": "ns",
            "range": "± 131622.17606973884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41720.289855072464,
            "unit": "ns",
            "range": "± 1904.142520474221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6826173.333333333,
            "unit": "ns",
            "range": "± 20689.143690995686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17285542.85714286,
            "unit": "ns",
            "range": "± 54051.70906407357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44130607.692307696,
            "unit": "ns",
            "range": "± 260348.16900175065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88862800,
            "unit": "ns",
            "range": "± 536310.637597279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177881313.33333334,
            "unit": "ns",
            "range": "± 1600287.898592298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897337.779017857,
            "unit": "ns",
            "range": "± 12799.444152086584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508875.4036458333,
            "unit": "ns",
            "range": "± 2000.3586113358638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127328.013392857,
            "unit": "ns",
            "range": "± 1913.9417270115428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563935.546875,
            "unit": "ns",
            "range": "± 2697.492858400491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887292.6302083334,
            "unit": "ns",
            "range": "± 2344.9379627048156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751926.03515625,
            "unit": "ns",
            "range": "± 935.4002734147716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958476,
            "unit": "ns",
            "range": "± 76543.91049151678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3082192.3076923075,
            "unit": "ns",
            "range": "± 80048.00521225709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3915746.153846154,
            "unit": "ns",
            "range": "± 45926.03864520677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4041800,
            "unit": "ns",
            "range": "± 90965.05401873612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6995973.1707317075,
            "unit": "ns",
            "range": "± 211110.7896631414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287917.14285714284,
            "unit": "ns",
            "range": "± 7644.4707320460875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233643.6170212766,
            "unit": "ns",
            "range": "± 9031.380178970172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209901.75438596492,
            "unit": "ns",
            "range": "± 8699.189026818003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5115473.333333333,
            "unit": "ns",
            "range": "± 38085.982923355084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3542215.3846153845,
            "unit": "ns",
            "range": "± 29642.532678395473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16123.958333333334,
            "unit": "ns",
            "range": "± 1608.6440705184084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75971.81818181818,
            "unit": "ns",
            "range": "± 3232.5709816669378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66445.07042253521,
            "unit": "ns",
            "range": "± 3251.847331348504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149233.33333333334,
            "unit": "ns",
            "range": "± 17630.45833846897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4610.63829787234,
            "unit": "ns",
            "range": "± 639.9711157975304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14491.578947368422,
            "unit": "ns",
            "range": "± 1435.7638013159035"
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
          "id": "209f23ed94d414763aae988f5fc01c17843dc22e",
          "message": "Removed unnecessary code",
          "timestamp": "2023-04-03T08:10:57+09:00",
          "tree_id": "3630ec58dcbad78583537686b426cf184982a649",
          "url": "https://github.com/greymistcube/libplanet/commit/209f23ed94d414763aae988f5fc01c17843dc22e"
        },
        "date": 1680477978712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381996.875,
            "unit": "ns",
            "range": "± 131379.8345922996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2558107.6086956523,
            "unit": "ns",
            "range": "± 144213.6847339686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171776,
            "unit": "ns",
            "range": "± 134964.1165329331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5527512,
            "unit": "ns",
            "range": "± 350757.12518015434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50279.47368421053,
            "unit": "ns",
            "range": "± 3215.1196557664625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7432277.2727272725,
            "unit": "ns",
            "range": "± 175629.2901372449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19781593.333333332,
            "unit": "ns",
            "range": "± 153929.74495188508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49925657.14285714,
            "unit": "ns",
            "range": "± 589138.1589488754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99233940,
            "unit": "ns",
            "range": "± 1480645.7359640663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195878271.42857143,
            "unit": "ns",
            "range": "± 2870960.368782697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4852868.229166667,
            "unit": "ns",
            "range": "± 20820.13860292115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553944.4010416667,
            "unit": "ns",
            "range": "± 3222.6736899780626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174423.14453125,
            "unit": "ns",
            "range": "± 4065.59573179359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657071.9308035714,
            "unit": "ns",
            "range": "± 12325.521291118843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833708.2868303572,
            "unit": "ns",
            "range": "± 2080.2269147425263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759883.2659040178,
            "unit": "ns",
            "range": "± 1704.5310032922039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3093483.870967742,
            "unit": "ns",
            "range": "± 132273.8691386213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3215628.125,
            "unit": "ns",
            "range": "± 145419.93757407414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3935410.5263157897,
            "unit": "ns",
            "range": "± 86852.69710349845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4231917.647058823,
            "unit": "ns",
            "range": "± 201279.9342277795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7212374.358974359,
            "unit": "ns",
            "range": "± 239483.77674747855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311657.8947368421,
            "unit": "ns",
            "range": "± 10728.583483209131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256524.48979591837,
            "unit": "ns",
            "range": "± 10097.803610444305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220990.74074074073,
            "unit": "ns",
            "range": "± 9335.512810818182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5281206.666666667,
            "unit": "ns",
            "range": "± 92373.8016869244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3651991.6666666665,
            "unit": "ns",
            "range": "± 44477.9099070198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21681.443298969072,
            "unit": "ns",
            "range": "± 2537.688001939758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93612.24489795919,
            "unit": "ns",
            "range": "± 6363.106699344412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84501.0752688172,
            "unit": "ns",
            "range": "± 6010.0729689496375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182991.83673469388,
            "unit": "ns",
            "range": "± 16834.36393104178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6963.440860215053,
            "unit": "ns",
            "range": "± 905.8727411148346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20417.525773195877,
            "unit": "ns",
            "range": "± 2544.9300215198436"
          }
        ]
      }
    ]
  }
}