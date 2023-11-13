window.BENCHMARK_DATA = {
  "lastUpdate": 1699888611648,
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
          "id": "2850e75da3082f6811ef47634342ac38f72f04ca",
          "message": "Changelog",
          "timestamp": "2023-11-07T14:01:09+09:00",
          "tree_id": "5142e2927802dea256b965da5710b9b9886b60e6",
          "url": "https://github.com/greymistcube/libplanet/commit/2850e75da3082f6811ef47634342ac38f72f04ca"
        },
        "date": 1699334136661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7963508.785714285,
            "unit": "ns",
            "range": "± 91040.36268193489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22655120.57142857,
            "unit": "ns",
            "range": "± 368032.28741714294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55778481.23529412,
            "unit": "ns",
            "range": "± 1096943.7255170916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110883299,
            "unit": "ns",
            "range": "± 1464742.2165885605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221973416.53333333,
            "unit": "ns",
            "range": "± 3910449.8222937193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399465.2976190476,
            "unit": "ns",
            "range": "± 74672.1063602993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2702452.4153846153,
            "unit": "ns",
            "range": "± 124963.30343305944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075873.6666666667,
            "unit": "ns",
            "range": "± 101266.15533627981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9418057.644444445,
            "unit": "ns",
            "range": "± 570624.4852149603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3466120.5,
            "unit": "ns",
            "range": "± 120164.32479413667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3600290.296296296,
            "unit": "ns",
            "range": "± 86248.58780463277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4318282.066666666,
            "unit": "ns",
            "range": "± 129194.50469068436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256420.293103448,
            "unit": "ns",
            "range": "± 185502.25606260455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10743141.3,
            "unit": "ns",
            "range": "± 370594.49864689517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52122.02352941177,
            "unit": "ns",
            "range": "± 3899.192022459423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5369390.660456731,
            "unit": "ns",
            "range": "± 18500.49704707681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1610229.4733072917,
            "unit": "ns",
            "range": "± 4658.406594196537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150917.2760416667,
            "unit": "ns",
            "range": "± 3237.405739547684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602039.209735577,
            "unit": "ns",
            "range": "± 5202.708550347665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812566.615625,
            "unit": "ns",
            "range": "± 1777.2019224849964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759497.708203125,
            "unit": "ns",
            "range": "± 2243.788508471301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274699.45714285714,
            "unit": "ns",
            "range": "± 8934.603030593229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270468.09523809527,
            "unit": "ns",
            "range": "± 9354.743241407521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258425.43243243243,
            "unit": "ns",
            "range": "± 8730.919588643761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4371348.090909091,
            "unit": "ns",
            "range": "± 102929.20761789865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4020437.222222222,
            "unit": "ns",
            "range": "± 82663.21537885665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19674.892473118278,
            "unit": "ns",
            "range": "± 1608.5067302799118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85872.83157894737,
            "unit": "ns",
            "range": "± 5064.331468876395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70357.9375,
            "unit": "ns",
            "range": "± 1355.550095902029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86173.67346938775,
            "unit": "ns",
            "range": "± 11241.129557447955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5584.826530612245,
            "unit": "ns",
            "range": "± 630.5786088738522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21227.479166666668,
            "unit": "ns",
            "range": "± 1382.7377418438025"
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
          "id": "798ce5a532622090373c406e1d0687e86988d997",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:57:24+09:00",
          "tree_id": "b072baa6cae459b35c939eea5ba681ae8eb907f9",
          "url": "https://github.com/greymistcube/libplanet/commit/798ce5a532622090373c406e1d0687e86988d997"
        },
        "date": 1699888602066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10431189.170212766,
            "unit": "ns",
            "range": "± 403954.567117033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26712354.108695652,
            "unit": "ns",
            "range": "± 1016564.4818909803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73981767.13333334,
            "unit": "ns",
            "range": "± 1361912.6911226131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132952489.07692307,
            "unit": "ns",
            "range": "± 1421770.6400003755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271609803.5,
            "unit": "ns",
            "range": "± 2884096.326861645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618221.4479166667,
            "unit": "ns",
            "range": "± 144181.79369764737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3158515.2527472526,
            "unit": "ns",
            "range": "± 275732.49045662564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554499.69,
            "unit": "ns",
            "range": "± 245632.99730673977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11821180.626373626,
            "unit": "ns",
            "range": "± 851141.2102086319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4147704.652777778,
            "unit": "ns",
            "range": "± 204560.8343597282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4388746.054347826,
            "unit": "ns",
            "range": "± 281306.7066669194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5246707.638554217,
            "unit": "ns",
            "range": "± 278879.9015326192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5319066.728260869,
            "unit": "ns",
            "range": "± 417508.24572501064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14051774.551724138,
            "unit": "ns",
            "range": "± 877065.6931209401"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65138.57608695652,
            "unit": "ns",
            "range": "± 8338.11837449638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6508447.0765625,
            "unit": "ns",
            "range": "± 119272.03309844223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030302.950954861,
            "unit": "ns",
            "range": "± 56049.207945413735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368061.0689453124,
            "unit": "ns",
            "range": "± 42453.687406965924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3030290.8606770835,
            "unit": "ns",
            "range": "± 44788.55535665211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011028.605571546,
            "unit": "ns",
            "range": "± 22148.12521568408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 947829.7475911458,
            "unit": "ns",
            "range": "± 14944.572160467753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320251.0752688172,
            "unit": "ns",
            "range": "± 25303.894935294986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311742.4285714286,
            "unit": "ns",
            "range": "± 21203.672498541302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284121.6373626374,
            "unit": "ns",
            "range": "± 24612.38415807804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5274552.833333333,
            "unit": "ns",
            "range": "± 272176.925097047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4877914.280701755,
            "unit": "ns",
            "range": "± 211363.02251582922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20078.459770114943,
            "unit": "ns",
            "range": "± 1889.4130121123542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100915.87234042553,
            "unit": "ns",
            "range": "± 8858.016464336275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114093.70652173914,
            "unit": "ns",
            "range": "± 15406.904308246785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122204.04210526316,
            "unit": "ns",
            "range": "± 16038.744172011398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10870.151515151516,
            "unit": "ns",
            "range": "± 5022.881564550649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24405.984848484848,
            "unit": "ns",
            "range": "± 6135.262117653907"
          }
        ]
      }
    ]
  }
}