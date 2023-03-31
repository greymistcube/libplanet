window.BENCHMARK_DATA = {
  "lastUpdate": 1680268810062,
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
      }
    ]
  }
}