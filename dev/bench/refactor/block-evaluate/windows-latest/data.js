window.BENCHMARK_DATA = {
  "lastUpdate": 1680268013843,
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
      }
    ]
  }
}