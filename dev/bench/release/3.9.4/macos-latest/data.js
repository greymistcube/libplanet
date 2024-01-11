window.BENCHMARK_DATA = {
  "lastUpdate": 1704943672302,
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
          "id": "95985df3b5be18d2ba875ecbcfd93f2b2cec314b",
          "message": "Release 3.9.4",
          "timestamp": "2024-01-11T12:13:40+09:00",
          "tree_id": "9e36bd32c16585a301e61095347f3be5f9981035",
          "url": "https://github.com/greymistcube/libplanet/commit/95985df3b5be18d2ba875ecbcfd93f2b2cec314b"
        },
        "date": 1704943655842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7995834,
            "unit": "ns",
            "range": "± 167057.36431898442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18585349.230769232,
            "unit": "ns",
            "range": "± 253338.78645934243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47101168.11111111,
            "unit": "ns",
            "range": "± 985557.6232130119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93401669.64285715,
            "unit": "ns",
            "range": "± 1365044.682059873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191344739.43333334,
            "unit": "ns",
            "range": "± 2958767.478685133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40428.64893617021,
            "unit": "ns",
            "range": "± 8693.483058741947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220835.90666666668,
            "unit": "ns",
            "range": "± 11094.014229953666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214455.54301075268,
            "unit": "ns",
            "range": "± 14262.023703828452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201660.48969072165,
            "unit": "ns",
            "range": "± 19572.79256577378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3747450.5555555555,
            "unit": "ns",
            "range": "± 78237.30312417338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525362.4411764704,
            "unit": "ns",
            "range": "± 71923.03922550705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12689.163157894736,
            "unit": "ns",
            "range": "± 1232.4164259829038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59160.59782608696,
            "unit": "ns",
            "range": "± 3997.1920255631944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53795.44827586207,
            "unit": "ns",
            "range": "± 4313.011203967515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64896.07142857143,
            "unit": "ns",
            "range": "± 14488.407718999308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3508.375,
            "unit": "ns",
            "range": "± 797.5757134455392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12980.237113402061,
            "unit": "ns",
            "range": "± 1783.0341577700956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055244.4431818181,
            "unit": "ns",
            "range": "± 69552.87232685846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2374445.8541666665,
            "unit": "ns",
            "range": "± 135671.974056001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1641199.8865979381,
            "unit": "ns",
            "range": "± 150493.2505918646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7156372.177777777,
            "unit": "ns",
            "range": "± 648285.8828428411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2885019.5208333335,
            "unit": "ns",
            "range": "± 106494.71716055185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984664.5,
            "unit": "ns",
            "range": "± 88599.556274965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3650463.9142857143,
            "unit": "ns",
            "range": "± 159229.51971724292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3451098.7461538464,
            "unit": "ns",
            "range": "± 155482.991048562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13084596.284946237,
            "unit": "ns",
            "range": "± 2387272.4821272125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4343603.323697916,
            "unit": "ns",
            "range": "± 65900.71027713137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1369320.0413161058,
            "unit": "ns",
            "range": "± 6209.2560907750085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890958.8739536831,
            "unit": "ns",
            "range": "± 6521.502480782608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2202975.609592014,
            "unit": "ns",
            "range": "± 108720.67473548088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630566.7233723958,
            "unit": "ns",
            "range": "± 11309.273561694416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592588.1021167652,
            "unit": "ns",
            "range": "± 16038.687168603492"
          }
        ]
      }
    ]
  }
}