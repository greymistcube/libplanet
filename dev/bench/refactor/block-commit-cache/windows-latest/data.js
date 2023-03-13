window.BENCHMARK_DATA = {
  "lastUpdate": 1678677131028,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678672828501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087707.4468085107,
            "unit": "ns",
            "range": "± 111565.37838248107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1810205.5555555555,
            "unit": "ns",
            "range": "± 75390.92687681927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1657108,
            "unit": "ns",
            "range": "± 143991.46697501265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3669514.705882353,
            "unit": "ns",
            "range": "± 110000.12984111605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33858.02469135803,
            "unit": "ns",
            "range": "± 1795.5406008728166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5266393.333333333,
            "unit": "ns",
            "range": "± 38221.50603795622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13935564.285714285,
            "unit": "ns",
            "range": "± 186957.44726517875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 32644900,
            "unit": "ns",
            "range": "± 198682.16182780836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 66654078.571428575,
            "unit": "ns",
            "range": "± 384502.6301371911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 133227733.33333333,
            "unit": "ns",
            "range": "± 966175.3971692915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3661635.1041666665,
            "unit": "ns",
            "range": "± 11561.55592420806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1127170.1041666667,
            "unit": "ns",
            "range": "± 3087.021807294624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 807211.2374441965,
            "unit": "ns",
            "range": "± 1681.1505546379744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003851.9270833333,
            "unit": "ns",
            "range": "± 3277.627861890618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623441.4518229166,
            "unit": "ns",
            "range": "± 1118.4445455798689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575712.1243990385,
            "unit": "ns",
            "range": "± 397.1037375156685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226185.294117647,
            "unit": "ns",
            "range": "± 69938.28938884728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3583747.5,
            "unit": "ns",
            "range": "± 96183.69974249195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15543452.94117647,
            "unit": "ns",
            "range": "± 317869.8281483457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4428072,
            "unit": "ns",
            "range": "± 117373.38042901097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18379096.296296295,
            "unit": "ns",
            "range": "± 326392.27988782205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 128284.88372093023,
            "unit": "ns",
            "range": "± 6978.007762912082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 127981.70731707317,
            "unit": "ns",
            "range": "± 6669.612831393328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 102919.10112359551,
            "unit": "ns",
            "range": "± 5676.2238649174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7956700,
            "unit": "ns",
            "range": "± 62739.48403631366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6471186.666666667,
            "unit": "ns",
            "range": "± 89809.026484509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11589.473684210527,
            "unit": "ns",
            "range": "± 1405.042112203783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 33132.94117647059,
            "unit": "ns",
            "range": "± 2282.8234520359356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25684.782608695652,
            "unit": "ns",
            "range": "± 2001.3146658589526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71765.93406593407,
            "unit": "ns",
            "range": "± 11332.129541756922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3104.1237113402062,
            "unit": "ns",
            "range": "± 547.897026094091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10219.565217391304,
            "unit": "ns",
            "range": "± 1410.4195565044758"
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
          "id": "3548bcca70176accabec0ad9c52cede62079d0f8",
          "message": "Changelog",
          "timestamp": "2023-03-13T11:57:05+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/greymistcube/libplanet/commit/3548bcca70176accabec0ad9c52cede62079d0f8"
        },
        "date": 1678677109223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369283,
            "unit": "ns",
            "range": "± 108028.81775552561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2453183.870967742,
            "unit": "ns",
            "range": "± 67736.05685194158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2134548.484848485,
            "unit": "ns",
            "range": "± 150535.71504059405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4931550,
            "unit": "ns",
            "range": "± 138627.44236902657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47089.04109589041,
            "unit": "ns",
            "range": "± 2249.726010715009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6854825,
            "unit": "ns",
            "range": "± 15397.409758551186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19385946.666666668,
            "unit": "ns",
            "range": "± 318133.2781503165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46827652.941176474,
            "unit": "ns",
            "range": "± 902393.8975841198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95472700,
            "unit": "ns",
            "range": "± 1752199.5750104114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185656976.66666666,
            "unit": "ns",
            "range": "± 2860410.9813268506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897258.816964285,
            "unit": "ns",
            "range": "± 12599.757609954484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514687.9427083333,
            "unit": "ns",
            "range": "± 3133.84008389228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139454.39453125,
            "unit": "ns",
            "range": "± 3648.929179083302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651166.5104166665,
            "unit": "ns",
            "range": "± 5658.834688070822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821249.072265625,
            "unit": "ns",
            "range": "± 2008.847941972271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769711.3997395834,
            "unit": "ns",
            "range": "± 994.6720575189964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3022572.727272727,
            "unit": "ns",
            "range": "± 71639.0966802358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4719328.571428572,
            "unit": "ns",
            "range": "± 212852.05177470212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21852753.846153848,
            "unit": "ns",
            "range": "± 209865.64597135558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5903937.5,
            "unit": "ns",
            "range": "± 183439.59320397195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25368875,
            "unit": "ns",
            "range": "± 657468.6993706803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179327.5,
            "unit": "ns",
            "range": "± 6352.547944298837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180210.63829787233,
            "unit": "ns",
            "range": "± 6334.386283115262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161396.9696969697,
            "unit": "ns",
            "range": "± 10494.317748633135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10895685,
            "unit": "ns",
            "range": "± 243887.72713559907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9042100,
            "unit": "ns",
            "range": "± 240032.28449523202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18970.967741935485,
            "unit": "ns",
            "range": "± 2110.0474260671144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50565.93406593407,
            "unit": "ns",
            "range": "± 3935.0623256456192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39352.27272727273,
            "unit": "ns",
            "range": "± 1489.1059650182233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103461.95652173914,
            "unit": "ns",
            "range": "± 15971.312485315144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6789.89898989899,
            "unit": "ns",
            "range": "± 794.9451206183273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19621.505376344085,
            "unit": "ns",
            "range": "± 1899.5908862954857"
          }
        ]
      }
    ]
  }
}