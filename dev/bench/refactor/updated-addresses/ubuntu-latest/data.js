window.BENCHMARK_DATA = {
  "lastUpdate": 1699002737553,
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
          "id": "0e72cb326937cc8187ec97be38ce02d3030a35e5",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:48:20+09:00",
          "tree_id": "f5e73c27bae6c711624a26ac0ac99945fe783f9c",
          "url": "https://github.com/greymistcube/libplanet/commit/0e72cb326937cc8187ec97be38ce02d3030a35e5"
        },
        "date": 1699001958513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5424180.071428572,
            "unit": "ns",
            "range": "± 31935.926606649053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14438570.142857144,
            "unit": "ns",
            "range": "± 87151.09630349521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36429011.56666667,
            "unit": "ns",
            "range": "± 274799.0333756826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73775141.43333334,
            "unit": "ns",
            "range": "± 441434.01946067717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145194693.2142857,
            "unit": "ns",
            "range": "± 1045015.5309456247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001549.4623655914,
            "unit": "ns",
            "range": "± 96123.62742272818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1856368.2424242424,
            "unit": "ns",
            "range": "± 58793.353829339365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502432.175257732,
            "unit": "ns",
            "range": "± 132381.60813959475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6345157.5,
            "unit": "ns",
            "range": "± 192495.01542610768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415731.44,
            "unit": "ns",
            "range": "± 97604.82977681808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548118.442857143,
            "unit": "ns",
            "range": "± 82524.75035796047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110875.1428571427,
            "unit": "ns",
            "range": "± 45429.84423153021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3152460.404761905,
            "unit": "ns",
            "range": "± 71608.21602784471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7315830.285714285,
            "unit": "ns",
            "range": "± 236973.14114492477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42124.34375,
            "unit": "ns",
            "range": "± 5392.11260683627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3732594.842122396,
            "unit": "ns",
            "range": "± 14997.90511387941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195754.899188702,
            "unit": "ns",
            "range": "± 12377.06985547989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762840.7310965402,
            "unit": "ns",
            "range": "± 5967.855951183966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903865.191685268,
            "unit": "ns",
            "range": "± 4603.10732660703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634699.861328125,
            "unit": "ns",
            "range": "± 963.4383050972181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571398.3839393029,
            "unit": "ns",
            "range": "± 976.6109449689399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204886.90384615384,
            "unit": "ns",
            "range": "± 8236.035257044437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193923.26373626373,
            "unit": "ns",
            "range": "± 11164.382669737588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169922.36363636365,
            "unit": "ns",
            "range": "± 3714.45902675906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3039931.2333333334,
            "unit": "ns",
            "range": "± 31624.31541995735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2754296.1,
            "unit": "ns",
            "range": "± 37529.41398575637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15140.873684210526,
            "unit": "ns",
            "range": "± 3230.6286531436695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67263.32653061225,
            "unit": "ns",
            "range": "± 6593.8468924241915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70186.15,
            "unit": "ns",
            "range": "± 19850.152029733566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64907.608695652176,
            "unit": "ns",
            "range": "± 9547.69017340823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3349.483870967742,
            "unit": "ns",
            "range": "± 628.8941746344933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14328.744897959185,
            "unit": "ns",
            "range": "± 2443.4774877663854"
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
          "id": "5ff19af73580788ad4e9bb51d63a23bfeb637802",
          "message": "Changelog",
          "timestamp": "2023-11-03T17:55:04+09:00",
          "tree_id": "d12bb875589ed67deba30e725361ffe6eaa7e75c",
          "url": "https://github.com/greymistcube/libplanet/commit/5ff19af73580788ad4e9bb51d63a23bfeb637802"
        },
        "date": 1699002552967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5472754.766666667,
            "unit": "ns",
            "range": "± 24495.18174331628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14141995.933333334,
            "unit": "ns",
            "range": "± 108035.9533471987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35968390.65384615,
            "unit": "ns",
            "range": "± 208048.49923669486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72877268.07142857,
            "unit": "ns",
            "range": "± 455467.9545358081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148349397.06666666,
            "unit": "ns",
            "range": "± 969327.074741579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997654.6161616162,
            "unit": "ns",
            "range": "± 90154.98788432391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851941.1842105263,
            "unit": "ns",
            "range": "± 80400.6890564729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1443655.8043478262,
            "unit": "ns",
            "range": "± 93175.91451618994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6220813.505617977,
            "unit": "ns",
            "range": "± 390252.49636514834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2328854.875,
            "unit": "ns",
            "range": "± 43591.3983638592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2481813.1379310344,
            "unit": "ns",
            "range": "± 72320.14175116684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3067308.8571428573,
            "unit": "ns",
            "range": "± 38538.51361322182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2866718.0757575757,
            "unit": "ns",
            "range": "± 126626.53635599944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7226571.3,
            "unit": "ns",
            "range": "± 235136.37569555466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38667.67021276596,
            "unit": "ns",
            "range": "± 4498.489620813362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733103.693684896,
            "unit": "ns",
            "range": "± 10168.799617259347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1179932.80859375,
            "unit": "ns",
            "range": "± 3907.567689155097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750294.4519042969,
            "unit": "ns",
            "range": "± 1949.890680028232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982061.03515625,
            "unit": "ns",
            "range": "± 10160.670072561312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626716.4236778846,
            "unit": "ns",
            "range": "± 1057.3467878495317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570124.9574819711,
            "unit": "ns",
            "range": "± 2762.1499280926555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196361.03703703705,
            "unit": "ns",
            "range": "± 5189.9537161229655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191473.33333333334,
            "unit": "ns",
            "range": "± 9448.433307793995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169884.3,
            "unit": "ns",
            "range": "± 3876.153839758386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2993996.214285714,
            "unit": "ns",
            "range": "± 51324.73802425339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2745578.8571428573,
            "unit": "ns",
            "range": "± 22238.759843180047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13728.80612244898,
            "unit": "ns",
            "range": "± 2273.23166873857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67984.86363636363,
            "unit": "ns",
            "range": "± 3732.281562175091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81688.63,
            "unit": "ns",
            "range": "± 15374.797393199015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59923.89361702128,
            "unit": "ns",
            "range": "± 7699.6329761265615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3236.636842105263,
            "unit": "ns",
            "range": "± 501.02458024651656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12791.436842105262,
            "unit": "ns",
            "range": "± 2571.5343164440746"
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
          "id": "7c248d21166d26575b7d9f0aee1f847c19c708ca",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:51:30+09:00",
          "tree_id": "0b94b76b85071abe723cfd5e4c3bd6b1e16ee0ff",
          "url": "https://github.com/greymistcube/libplanet/commit/7c248d21166d26575b7d9f0aee1f847c19c708ca"
        },
        "date": 1699002727692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9505947.831578948,
            "unit": "ns",
            "range": "± 866524.2700666775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24834200.12244898,
            "unit": "ns",
            "range": "± 2102144.4398988415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65837286.82105263,
            "unit": "ns",
            "range": "± 3745165.9595560604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133889690.14,
            "unit": "ns",
            "range": "± 5394072.679030023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261049761.9032258,
            "unit": "ns",
            "range": "± 7658189.72278024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592801.2659574468,
            "unit": "ns",
            "range": "± 195414.22606918574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3233439.1041666665,
            "unit": "ns",
            "range": "± 354669.8948306863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2452544.6666666665,
            "unit": "ns",
            "range": "± 284571.9845946916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12236506.353535354,
            "unit": "ns",
            "range": "± 1527796.963977098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3650545.3,
            "unit": "ns",
            "range": "± 298331.3347544467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3825055.7032967033,
            "unit": "ns",
            "range": "± 379388.0283149721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5164702.516129033,
            "unit": "ns",
            "range": "± 485317.56713381724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5126920.097826087,
            "unit": "ns",
            "range": "± 536490.7893114097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15043488.1010101,
            "unit": "ns",
            "range": "± 1949481.7908574173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61938.085106382976,
            "unit": "ns",
            "range": "± 17879.63967226083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6169526.582465278,
            "unit": "ns",
            "range": "± 172690.7074458651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234710.279296875,
            "unit": "ns",
            "range": "± 135117.02440074098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355379.5278320312,
            "unit": "ns",
            "range": "± 30242.31322042684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3081218.7721354165,
            "unit": "ns",
            "range": "± 52282.490257757054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004631.7013020833,
            "unit": "ns",
            "range": "± 16225.34949028118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944618.331655649,
            "unit": "ns",
            "range": "± 32290.5740225502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345128.1855670103,
            "unit": "ns",
            "range": "± 66342.37583446223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339723.44,
            "unit": "ns",
            "range": "± 60980.70672808709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271169.7802197802,
            "unit": "ns",
            "range": "± 37232.25208003352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4799038.010638298,
            "unit": "ns",
            "range": "± 440679.7391155587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4642390.302325581,
            "unit": "ns",
            "range": "± 358711.3326447415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24691.583333333332,
            "unit": "ns",
            "range": "± 9015.592462263032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103727.75268817204,
            "unit": "ns",
            "range": "± 21226.102262900942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99454.40206185567,
            "unit": "ns",
            "range": "± 23916.081702338124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118062.32323232324,
            "unit": "ns",
            "range": "± 29627.08735359789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5364.130434782609,
            "unit": "ns",
            "range": "± 838.1798073165537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19159.9625,
            "unit": "ns",
            "range": "± 2449.626587114344"
          }
        ]
      }
    ]
  }
}