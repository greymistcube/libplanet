window.BENCHMARK_DATA = {
  "lastUpdate": 1701753867722,
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
          "id": "b2db8c579299ad0e6329bf76eef78013bb687af1",
          "message": "Prepare 3.9.1",
          "timestamp": "2023-12-05T14:12:03+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/greymistcube/libplanet/commit/b2db8c579299ad0e6329bf76eef78013bb687af1"
        },
        "date": 1701753849930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955407,
            "unit": "ns",
            "range": "± 107830.80391862695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1667851.5151515151,
            "unit": "ns",
            "range": "± 42591.43928957527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1328295.744680851,
            "unit": "ns",
            "range": "± 115014.66845664589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5714274.489795919,
            "unit": "ns",
            "range": "± 350561.8716252038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35888.23529411765,
            "unit": "ns",
            "range": "± 1943.5125151021134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090521.428571428,
            "unit": "ns",
            "range": "± 27202.295677201404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13071793.333333334,
            "unit": "ns",
            "range": "± 170077.76568661875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31944850,
            "unit": "ns",
            "range": "± 543649.7935959537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68401212.5,
            "unit": "ns",
            "range": "± 1698647.2511236698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132855453.84615384,
            "unit": "ns",
            "range": "± 1915485.527925572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343734.6875,
            "unit": "ns",
            "range": "± 20301.650712765226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046878.8671875,
            "unit": "ns",
            "range": "± 7339.7883650433805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747711.5234375,
            "unit": "ns",
            "range": "± 2178.8859850959075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931111.875,
            "unit": "ns",
            "range": "± 9263.36671609102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609390.1106770834,
            "unit": "ns",
            "range": "± 4953.981570507317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562997.0768229166,
            "unit": "ns",
            "range": "± 3506.5270030026504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2253980.64516129,
            "unit": "ns",
            "range": "± 68155.31487886002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2225768.8311688313,
            "unit": "ns",
            "range": "± 114017.02349780963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2769025.641025641,
            "unit": "ns",
            "range": "± 94884.5329249929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637145.8333333335,
            "unit": "ns",
            "range": "± 113384.21523335823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6627927.173913044,
            "unit": "ns",
            "range": "± 416857.86101071787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176550,
            "unit": "ns",
            "range": "± 10854.163494647542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161451.76470588235,
            "unit": "ns",
            "range": "± 8707.626812506514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139591.8918918919,
            "unit": "ns",
            "range": "± 4695.528509974994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2716561.5384615385,
            "unit": "ns",
            "range": "± 43711.69825232788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540585.714285714,
            "unit": "ns",
            "range": "± 54870.14931375971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10462.36559139785,
            "unit": "ns",
            "range": "± 1335.9505635944754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53336.17021276596,
            "unit": "ns",
            "range": "± 5419.733974819507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44108,
            "unit": "ns",
            "range": "± 1707.2283301973907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57004.166666666664,
            "unit": "ns",
            "range": "± 12444.072075673677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2615.7894736842104,
            "unit": "ns",
            "range": "± 581.1426362931952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10473.404255319148,
            "unit": "ns",
            "range": "± 1534.2102820862326"
          }
        ]
      }
    ]
  }
}