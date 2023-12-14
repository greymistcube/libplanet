window.BENCHMARK_DATA = {
  "lastUpdate": 1702517904269,
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
          "id": "e8396a4c123eca45891de7a292befa11b49e186e",
          "message": "Added HelperQuery",
          "timestamp": "2023-12-14T10:21:08+09:00",
          "tree_id": "3b228ebd7e37b79a77a996183e1fef4220da9d13",
          "url": "https://github.com/greymistcube/libplanet/commit/e8396a4c123eca45891de7a292befa11b49e186e"
        },
        "date": 1702517571651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925920.2020202021,
            "unit": "ns",
            "range": "± 90226.6816274975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718908.5106382978,
            "unit": "ns",
            "range": "± 64806.73552550468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1303290.5263157894,
            "unit": "ns",
            "range": "± 103122.04510137616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5261347.619047619,
            "unit": "ns",
            "range": "± 168533.46955440767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33608.771929824565,
            "unit": "ns",
            "range": "± 1464.1283001151212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4942821.428571428,
            "unit": "ns",
            "range": "± 15766.977592981553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12938233.333333334,
            "unit": "ns",
            "range": "± 84660.41971704763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31806014.285714287,
            "unit": "ns",
            "range": "± 150868.6023161717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64878460,
            "unit": "ns",
            "range": "± 602134.6038410823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128268400,
            "unit": "ns",
            "range": "± 701830.9523769137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3226277.7864583335,
            "unit": "ns",
            "range": "± 3702.177247741917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1032239.0206473215,
            "unit": "ns",
            "range": "± 1285.5408835824987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744652.734375,
            "unit": "ns",
            "range": "± 1851.711362772071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911601.1588541667,
            "unit": "ns",
            "range": "± 1627.5149298825727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618051.9010416666,
            "unit": "ns",
            "range": "± 1101.1933188245848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569625.8370535715,
            "unit": "ns",
            "range": "± 1102.240219766774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097768.4210526315,
            "unit": "ns",
            "range": "± 40107.82761827559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200183.3333333335,
            "unit": "ns",
            "range": "± 37773.43979072053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728230,
            "unit": "ns",
            "range": "± 79122.68147717146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623038,
            "unit": "ns",
            "range": "± 104782.76778406742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6295433.333333333,
            "unit": "ns",
            "range": "± 301790.68353192526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167291.37931034484,
            "unit": "ns",
            "range": "± 7322.934041516866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160498.61111111112,
            "unit": "ns",
            "range": "± 7938.8063291116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141983.33333333334,
            "unit": "ns",
            "range": "± 4941.495116231507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2773133.3333333335,
            "unit": "ns",
            "range": "± 38755.56488459186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2591950,
            "unit": "ns",
            "range": "± 29866.929228470435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9971.42857142857,
            "unit": "ns",
            "range": "± 1202.8009638881067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50626.31578947369,
            "unit": "ns",
            "range": "± 4099.434588058372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43850,
            "unit": "ns",
            "range": "± 1891.0583531227305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55244.444444444445,
            "unit": "ns",
            "range": "± 13118.636239336973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2084.782608695652,
            "unit": "ns",
            "range": "± 220.3567450268637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9628.888888888889,
            "unit": "ns",
            "range": "± 1101.0969448225837"
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
          "id": "481de08392e541495922a1ea17c1f8999b9268ab",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:25:44+09:00",
          "tree_id": "27ee13100144e4d42b8e20df6b95145c81e45ff1",
          "url": "https://github.com/greymistcube/libplanet/commit/481de08392e541495922a1ea17c1f8999b9268ab"
        },
        "date": 1702517882162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952232.3232323233,
            "unit": "ns",
            "range": "± 97552.49118492185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724670.4545454546,
            "unit": "ns",
            "range": "± 94571.45952195543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1357060.3092783506,
            "unit": "ns",
            "range": "± 118969.95111208412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5482498.837209302,
            "unit": "ns",
            "range": "± 298151.5325326589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34455.71428571428,
            "unit": "ns",
            "range": "± 1684.4244460009818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4962840,
            "unit": "ns",
            "range": "± 41760.14504627246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13433228.57142857,
            "unit": "ns",
            "range": "± 101761.33789465373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31879976.923076924,
            "unit": "ns",
            "range": "± 225257.34969084492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63875073.333333336,
            "unit": "ns",
            "range": "± 448431.85095662076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128506185.71428572,
            "unit": "ns",
            "range": "± 905356.9375641876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352593.8671875,
            "unit": "ns",
            "range": "± 9271.434817252217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063082.338169643,
            "unit": "ns",
            "range": "± 2706.9521360234694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732879.8111979166,
            "unit": "ns",
            "range": "± 2271.344274405882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891122.2055288462,
            "unit": "ns",
            "range": "± 5893.487149973236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602663.0859375,
            "unit": "ns",
            "range": "± 1376.5758218703636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561498.4793526785,
            "unit": "ns",
            "range": "± 1261.7310155294995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2067966.6666666667,
            "unit": "ns",
            "range": "± 51278.639223166894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2233177.419354839,
            "unit": "ns",
            "range": "± 41109.82615448054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2722373.3333333335,
            "unit": "ns",
            "range": "± 80312.12788276421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2732600,
            "unit": "ns",
            "range": "± 69749.38366565779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6177562.5,
            "unit": "ns",
            "range": "± 149655.43849703268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174848.07692307694,
            "unit": "ns",
            "range": "± 6572.655487002919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163436.301369863,
            "unit": "ns",
            "range": "± 8150.295070808669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145484.78260869565,
            "unit": "ns",
            "range": "± 5494.885193070384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761235.294117647,
            "unit": "ns",
            "range": "± 54972.79942362939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2538230.769230769,
            "unit": "ns",
            "range": "± 23386.72645666713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12018.681318681318,
            "unit": "ns",
            "range": "± 1802.7702194069168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58284.73684210526,
            "unit": "ns",
            "range": "± 6718.247118475533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46305.1724137931,
            "unit": "ns",
            "range": "± 2538.2542352867417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60054.166666666664,
            "unit": "ns",
            "range": "± 12738.982167609258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2751.5789473684213,
            "unit": "ns",
            "range": "± 454.96391203500895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11878.947368421053,
            "unit": "ns",
            "range": "± 2071.8937137387707"
          }
        ]
      }
    ]
  }
}